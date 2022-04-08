import React from 'react';

export const HomePage = () => {
  return (
    <div className="mt-4 space-y-10 space-x-5">
      <div className="space-y-4">
        <div className="bg-cover bg-center rounded-2xl bg-[url('https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')] bg-no-repeat h-80 object-cover w-full">
          <div className="space-y-2 pt-40 pl-8">
            <div className="text-2xl font-semibold text-white">봄맞이 세일</div>
            <div className="text-l text-white">구경해보세요</div>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-6 justify-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">아우터</div>
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/photos/theres-no-one-else-like-you-picture-id1297600922?b=1&k=20&m=1297600922&s=170667a&w=0&h=lyGyWLRHbX89L7ZKzQ_vaDBN9ABfnQHIS1iY5QYMI5M="
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">상의</div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">하의</div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWNjZXNzb3J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-center">악세사리</div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-3xl font-bold mb-10">List</div>

        <div className="border p-4 rounded-md">
          <div>
            <img
              src="https://images.unsplash.com/photo-1572196223922-d8b7e0ab0b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFjY2Vzc29yeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="text-xl mt-10">
              2022년 신상 아이템
              <div className="text-l mb-10 text-gray-400">
                2022년이 시작된 만큼 새로운 가방으로 일 년을 시작해 보는 것은
                어떠신가요? 세련된 디자인과 뛰어난 수납력을 가진 가방으로 패션과
                실용성을 동시에 챙겨 보세요!
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">
                button
              </div>
              <div className="text-center text-gray-800 rounded-md border border-gray-800 py-2.5 px-4">
                button
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-2 space-x-7">
        <div className="text-3xl font-bold mb-10">List</div>
        <div className="space-y-10">
          <div className="flex flex-row space-x-5">
            <img
              src="https://images.unsplash.com/photo-1601835884504-8a4c45324cc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRpb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="h-60 w-42 rounded-md object-cover"
            />

            <div className="space-y-5">
              <div className="text-2xl text-semibold">Christian Dior</div>
              <div className="text-lg text-semibold text-gray">
                올 해 가장 많은 선택을 받은 상품
              </div>
              <div className="text-l">Dior Book Tote 라지 백</div>
            </div>
          </div>
          <div className="border border-gray-200"></div>
          <div className="flex flex-row space-x-5">
            <img
              src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="h-60 w-40 rounded-md object-cover"
            />
            <div className="space-y-5 ">
              <div className="text-2xl text-semibold">Converse</div>
              <div className="text-lg text-semibold text-gray">
                이번 주 가장 주문량이 많은 상품
              </div>
              <div className="text-l">Converse 척 테일러 올스타 70 하이</div>
            </div>
          </div>
          <div className="border border-gray-200"></div>
        </div>
      </div>
      <div className="space-y-3 space-x-5">
        <div className="text-3xl font-bold">List</div>
        <div className="box border h-96 w-full border-gray-400 rounded-md">
          <img
            src="https://images.unsplash.com/photo-1589810635657-232948472d98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaW5nJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="h-60 w-full object-cover mb-4"
          />
          <div className="space-y-3 pl-3">
            <div>피크닉 가기 전에 봄옷 장만하기</div>
            <div className="flex flex-row space-x-2 items-center">
              <img
                src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3ByaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <div>Blossom</div>
            </div>
            <div className="flex flex-row space-x-3">
              <div className="bg-gray-200 border rounded-md">#벚꽃</div>
              <div className="bg-gray-200 border rounded-md">#야외</div>
              <div className="bg-gray-200 border rounded-md">#나들이</div>
              <div className="bg-gray-200 border rounded-md">#꽃구경</div>
              <div className="bg-gray-200 border rounded-md">#원피스</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
