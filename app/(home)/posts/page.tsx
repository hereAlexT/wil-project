"use client";
import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Card, Button } from '@radix-ui/themes';
import postNewPost from '@/services/clients/post-new-post';
import getAllPosts from '@/services/clients/get-all-posts';
import approvePost from '@/services/clients/approve-post';
import { useAuth } from '@/hooks/use-auth';

const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isAdmin } = useAuth();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setIsLoading(true);
            const { data, error } = await getAllPosts();
            if (error) throw error;
            setPosts(data);
        } catch (err) {
            setError('Failed to fetch posts');
            console.error('Error fetching posts:', err);
        } finally {
            setIsLoading(false);
        }
    };

    const showApproveButton = isAdmin;
    const showNotApprovedPosts = isAdmin;
    const filteredPosts = showNotApprovedPosts ? posts : posts.filter(post => post.is_approved);


    const handleAddPost = async () => {
        if (newPost.trim()) {
            try {
                const { data, error } = await postNewPost({ body: newPost.trim() });
                if (error) throw error;
                setPosts([...posts, data[0]]);
                setNewPost('');
            } catch (err) {
                setError('Failed to add post');
                console.error('Error adding post:', err);
            }
        }
    };

    const handleApprovePost = async ({ postId }) => {
        try {
            const { data, error } = await approvePost({ postId });
            if (error) throw error;

            // Update the local state to reflect the approved post
            setPosts(prevPosts => prevPosts.map(post =>
                post.id === postId ? { ...post, is_approved: true } : post
            ));
        } catch (err) {
            setError('Failed to approve post');
            console.error('Error approving post:', err);
        }
    };

    if (isLoading) return <div>Loading posts...</div>;
    if (error) return <div>Error: {error}</div>;
    console.log('filteredPost', filteredPosts)

    return (
        <div className="p-4">
            <div className="flex justify-end mb-4">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Post
                        </button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
                        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-96">
                            <Dialog.Title className="text-lg font-bold mb-4">Create a new post</Dialog.Title>
                            <textarea
                                value={newPost}
                                onChange={(e) => setNewPost(e.target.value)}
                                className="w-full h-32 p-2 border rounded mb-4"
                                placeholder="What's on your mind?"
                            />
                            <div className="flex justify-end gap-2">
                                <Dialog.Close asChild>
                                    <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                                        Cancel
                                    </button>
                                </Dialog.Close>
                                <Dialog.Close asChild>
                                    <button
                                        onClick={handleAddPost}
                                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Post
                                    </button>
                                </Dialog.Close>
                            </div>
                            <Dialog.Close asChild>
                                <button
                                    className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-200"
                                    aria-label="Close"
                                >
                                    X
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
            <div className="space-y-4">
                {filteredPosts.map((post) => (
                    <Card key={post.id} className="p-4 bg-white shadow rounded">
                        <p>{post.body}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Posted on: {new Date(post.created_at).toLocaleString()}
                        </p>
                        {!post.is_approved && showApproveButton && (
                            <Button
                                onClick={() => handleApprovePost({ postId: post.id })}
                                className="bg-green-500 hover:bg-green-600 text-white"
                            >
                                Approve
                            </Button>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PostPage;