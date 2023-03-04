import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcEXhoP40HyBFY_8uwhgwqvFIQwpUSmh0",
  authDomain: "web-development-e77c6.firebaseapp.com",
  projectId: "web-development-e77c6",
  storageBucket: "web-development-e77c6.appspot.com",
  messagingSenderId: "514453235221",
  appId: "1:514453235221:web:fdad8d4607ac0cdef0d01c"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("reg-btn").addEventListener('click', function(){
document.getElementById("register-div").style.display="inline";
document.getElementById("login-div").style.display="none";

});

document.getElementById("log-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
    
    });
    
    document.getElementById("login-btn").addEventListener('click', function(){
        const loginEmail=document.getElementById("login-email").value;
        const loginPassword=document.getElementById("login-password").value;

        signInWithEmailAndPassword(auth,loginEmail,loginPassword)
        .then((userCredential) => {
         const user = userCredential.user;
         document.getElementById("result-box").style.display="inline";
         document.getElementById("login-div").style.display="none";
         document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById("result-box").style.display="inline";
         document.getElementById("login-div").style.display="none";
         document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
        
        });
        document.getElementById("register-btn").addEventListener('click', function(){
            const registerEmail=document.getElementById("register-email").value;
            const registerPassword=document.getElementById("register-password").value;
    
            createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            .then((userCredential) => {
             const user = userCredential.user;
             document.getElementById("result-box").style.display="inline";
             document.getElementById("register-div").style.display="none";
             document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was registered Successfully";
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              document.getElementById("result-box").style.display="inline";
             document.getElementById("register-div").style.display="none";
             document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
            });
        });
    });
    document.getElementById("log-out-btn").addEventListener('click', function(){
        signOut(auth).then(() => {
            document.getElementById("result-box").style.display="none";
            document.getElementById("login-div").style.display="inline";
          }).catch((error) => {
            document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
          });
    });