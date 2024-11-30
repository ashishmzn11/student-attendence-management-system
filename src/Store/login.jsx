import { createContext,useReducer } from "react";
export const loginUser = createContext({
    loginStudent:()=>{},
   registrationStudent:()=>{},
    forgetStudent:()=>{},
    logoutStudent:()=>{},
    AddStudent:()=>{},
});
const loginStudentReucer=(currloginStudent,action)=>{
    let newloginUser=currloginStudent;
    if(action.type==="DELETE_POST")
    {
      newloginUser=currloginStudent.filter(
            (post)=>post.userId !==action.payload.postId
        );
    }
    else if(action.type==="ADD_POST"){
      newPostList=[action.payload, ...currpostlist]
  }
};

const loginUserProvider=({children})=>{
    const loginStudent=(post)=>{ dispatchList({
      type:"ADD_POST",
      payload:post,
  })};
  const AddStudent=(post)=>{ dispatchList({
    type:"ADD_POST",
    payload:post,
})};

    return(
       <loginUser.Provider value={{loginStudent,AddStudent}} >
        {children}
       </loginUser.Provider>
    );
};
const Default_Post_List=[
  {
      userId:"1",
      title:"going to dheli",
      post:"ashish",
      tags:["like", "dislike","comment"],
      reactions:"20"
  },
  {
      userId:"2",
      title:"going to eli",
      post:"ashi",
      tags:["like", "dislike","comment"],
      reactions:"20"
  },
  {
      userId:"3",
      title:"going to dli",
      post:"ash",
      tags:["like", "dislike","comment"],
      reactions:"20"
  },
]
export default loginUserProvider;