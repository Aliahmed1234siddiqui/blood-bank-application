import React from 'react'
import {getAuth ,signOut, createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import {getDatabase , ref , set , onValue, push , remove , update} from "firebase/database"
import{app} from './FirebaseConfig' 
import { log } from 'console';
import { resolve } from 'path';
const database = getDatabase(app);
let auth = getAuth(app);


// use in checking porjected router
export let fbAuth = ()=>{
  return new Promise((resolve , reject)=>{
    onAuthStateChanged(auth , (user)=>{
      if(user){
resolve(user.uid)
      }else{
reject("user in not signup")
      }
    } )
  })
}

//  for signup user
export let fbSignup = (body:any,nodeName:any)=>{
    let auth = getAuth(app);
    return new Promise((resolve , reject)=>{
      if(!body.email || !body.password){
        reject('email and passward is required')
      }else{
        createUserWithEmailAndPassword(auth, body.email,body.password).then((res)=>{
          let id = res.user.uid
          body.id = id 
          let userRef = ref( database, `${nodeName}/${id}`);
  set(userRef , body).then(()=>{
    resolve("user add successfully");
  })
          console.log(res);
  resolve("sucessfully");
        }).catch((err)=>{
          alert(err.message)
  
        })
      }
    })
  }

//for check user if availble or not
export let fbLogin = (body:any)=>{
  const database = getDatabase(app);
  return new Promise((resolve , reject)=>{
    if(!body.email || !body.password){
      reject('email and passward is required')
    }else{
      signInWithEmailAndPassword(auth, body.email,body.password).then((res)=>{
let id = res.user.uid;
let userRef = ref(database,`users/${id}`)
onValue(userRef , (data)=>{
  resolve(data.val())
})

      }).catch((err)=>{
       alert(err.message)
      })
    }
  })

}


// for adding data from firebase data base
export let fbAdd= (body:any,nodeName:any)=>{
  return new Promise((resolve , reject )=>{
console.log(body);
const taskId = push(ref(database ,`${nodeName}/`)).key;
console.log(taskId);
body.id = taskId;
let  userRef = ref(database ,`${nodeName}/${body.id}`);
 set(userRef , body).then(res=>{
  resolve("successfully");
 }).catch(err=>{
  reject(err);
 })
})
  
} 


// for getting data from firebase database
export let fbGet = (nodeName:string , id? :string )=>{
  return new Promise((resolve , reject)=>{
    let  userRef = ref(database ,`${nodeName}/${id?id:""}`);
    onValue(userRef , (data)=>{
      if(data.exists()){
let get =data.val();
resolve(get)
}else{
  console.log("no data found");
}
    })
  })

}
export let fbGet2 = (nodeName:string , id? :string )=>{
  return new Promise((resolve , reject)=>{
    let  userRef = ref(database ,`${nodeName}/${id?id:""}`);
    onValue(userRef , (data)=>{
      if(data.exists()){
let get =Object.values(data.val());
resolve(get)
}else{
  console.log("no data found");
}
    })
  })

}
// for removing data
export let Delet = (nodeName:string ,id: string )=>{
    return new Promise((resolve , reject)=>{
        let  userRef = ref(database ,`${nodeName}/${id}`);
        remove(userRef).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
// for editing data
export let Edit = (nodeName:string ,id: string )=>{
    let obj = {

    }
    return new Promise((resolve , reject)=>{
        let  userRef = ref(database ,`${nodeName}/${id}`);
        update(userRef, obj).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
// for logout
export let fbLogout =()=>{
  return  new Promise((Resolve , Reject)=>{
        signOut(auth).then(() => {
            Resolve(" Sign-out successful.");
          }).catch((error) => {
            Reject("An error happened."); 
          });
          
    })
} 
