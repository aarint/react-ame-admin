import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Segmented, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import AuthIllustration from './AuthIllustration';
import './auth.css';

type AuthMode = 'login' | 'register';

interface AuthFormValues {
  username?: string;
  email?: string;
  password?: string;
  confirm?: string;
  remember?: boolean;
}

const Auth: React.FC = () => {
  const { pathname } = useLocation();
  const [mode, setMode] = useState<AuthMode>(
    pathname === '/register' ? 'register' : 'login'
  );
  const [loading, setLoading] = useState(false);
  const formRef = React.useRef<FormInstance>(null);
  const navigate = useNavigate();

  const isLogin = mode === 'login';

  const switchMode = (newMode: AuthMode) => {
    setMode(newMode);
    formRef.current?.resetFields();
    formRef.current?.setFieldsValue(
      newMode === 'login' ? { remember: true } : undefined
    );
  };

  const onFinish = async (values: AuthFormValues) => {
    setLoading(true);
    try {
      if (isLogin) {
        // TODO: Connect to real login API
        await new Promise((r) => setTimeout(r, 800));
        if (values.remember && values.username) {
          sessionStorage.setItem(
            'rememberLogin',
            JSON.stringify({ username: values.username })
          );
        }
        message.success('Login successful');
        navigate('/', { replace: true });
      } else {
        // TODO: Connect to real register API
        await new Promise((r) => setTimeout(r, 800));
        message.success('Registration successful. Please sign in.');
        switchMode('login');
      }
    } catch {
      message.error(isLogin ? 'Login failed. Check username and password.' : 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-page-left">
        <div className="auth-left-content">
          <div className="auth-illustration-wrap">
            <AuthIllustration />
          </div>
          <p className="auth-slogan">Secure and convenient account system</p>
        </div>
      </div>
      <div className="auth-page-right">
        <div className="auth-form-wrap">
          <h1 className="auth-title">Account Center</h1>
          <Segmented
            block
            options={[
              { label: 'Sign In', value: 'login' },
              { label: 'Sign Up', value: 'register' },
            ]}
            value={mode}
            onChange={(v) => switchMode(v as AuthMode)}
            className="auth-segmented"
          />
          <Form
          ref={formRef}
          name="auth"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Please enter username' },
              ...(isLogin ? [] : [{ min: 2, message: 'Username must be at least 2 characters' }]),
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
          )}

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please enter password' },
              ...(isLogin ? [] : [{ min: 6, message: 'Password must be at least 6 characters' }]),
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          {!isLogin && (
            <Form.Item
              name="confirm"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm password" />
            </Form.Item>
          )}

          {isLogin && (
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>
          )}

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {isLogin ? 'Sign In' : 'Sign Up'}
            </Button>
          </Form.Item>

          <div className="auth-footer">
            {isLogin ? (
              <>
                No account yet?{' '}
                <a onClick={() => switchMode('register')}>Sign up</a>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <a onClick={() => switchMode('login')}>Sign in</a>
              </>
            )}
          </div>
        </Form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
