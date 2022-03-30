import React from 'react';
import { TextField } from '../components/TextField';

export const LoginPage = () => {
  return (
    <div>
     <div>로그인</div>
     <div>
     <TextField label='이메일' placeholder="이메일을 입력해주세요." />
     <TextField label='비밀번호' placeholder="비밀번호를 입력해주세요." />
     </div>
     <div></div>
    </div>
  );
};
