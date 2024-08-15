"use client";

import { useState, useEffect } from 'react';
import getProfile from '@/services/clients/get-profile';

export function useAuth() {
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await getProfile();
                console.log('profiledata', res.data);

                if (res.data && res.data.length > 0 && res.data[0].is_admin === true) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
                setIsAdmin(false);
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, []);

    return { isAdmin, loading };
}