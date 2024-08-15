'use client';

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import { createClient } from '@/utils/supabase/client';

const Login = () => {
    const supabase = createClient();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <Auth
                    supabaseClient={supabase}
                    appearance={{ theme: ThemeSupa }}
                    providers={[]}
                />
            </div>
        </div>
    );
};
export default Login;
