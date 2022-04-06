import React from 'react';
import { TextField } from '../components/TextField';

export const SignupPage = () => {
  return (
  <div className="m-4">
    <div className="text-3xl font-bold mb-10">회원가입
    </div> 
    <div>
    <div className="mt-4"><TextField label="아이디" placeholder="아이디를 입력해주세요." /> 
    </div>
    <div className="mt-3"><TextField 
    label="비밀번호" 
    placeholder="비밀번호를 입력해주세요."
    type='password' 
    />
    </div>
    <div className="mt-3"><TextField label="이메일" placeholder="이메일을 입력해주세요." />
    </div>
    <div className="mt-3"><TextField label="전화번호" placeholder="전화번호를 입력해주세요." />
    </div>
  </div> 
    <div className="mt-10">
    <div className="text-center py-4 text-gray-800 border border-gray-800 mt-6">회원가입</div>
    </div>
   </div>
  );
};
