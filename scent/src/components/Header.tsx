import React from 'react';

const header = () => {
    return (
        <div>
            <div className = "flex p-5 justify-between bg-smColor w-full h-[100px] border-solid border-b-2 border-smBorderColor">
                <div className='flex items-center justify-center'>
                    (로고) Scent Matching
                </div>
                <div className='flex gap-6 items-center justify-center'>
                    <div>로그인</div>
                    <div>회원가입</div>
                </div>
            </div>
        </div>
    );
};

export default header;