import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { db, storage } from "../Firebase";
import { doc, serverTimestamp, setDoc, collection } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

const AddPost = () => {
  let { data } = useSession();
  let [Type, setType] = useState("");
  let Picker = useRef(null);
  let [File, setFile] = useState(null);

  let Typing = (E) => {
    setType(E.target.value);
  };
  let SelectImage = (e) => {
    const Reader = new FileReader();

    if (e.target.files[0]) {
      Reader.readAsDataURL(e.target.files[0]);
    }

    Reader.onload = (readerEvent) => {
      setFile(readerEvent.target.result);
    };
  };

  let RemoveImage = () => {
    setFile(null);
  };

  let AddPost = async () => {
    if (Type || !Type) {
      let AllPosts = doc(collection(db, "Posts"));
      await setDoc(AllPosts, {
        Text: Type,
        Time: serverTimestamp(),
        Name: data?.user?.name,
        Email: data?.user?.email,
      }).then(async () => {
        if (File) {
          let { id } = AllPosts;
          const storageRef = ref(storage, "Images");
          const spaceRef = ref(storageRef, id);

          uploadString(spaceRef,File).then((snapshot) => {
            getDownloadURL(snapshot.ref).then(async (downloadURL) => {
              let Rf = doc(db, "Posts", id);
              setDoc(Rf, { Image: downloadURL }, { merge: true });
            });
          });
        }
      });
    }
    Picker.current.value = "";
  };
  return (
    <div className="flex flex-col bg-white p-2 rounded-xl space-y-3">
      <div className="Top text-xs flex items-center bg-white space-x-2">
        <img
          src={`${data?.user?.image}`}
          className=" rounded-full flex sm:h-[40px] sm:w-[40px] h-[20px] w-[20px] object-cover"
        />
        <input
          onChange={(E) => {
            Typing(E);
          }}
          value={Type}
          className="w-[100%] bg-gray-200 outline-none focus:outline-none p-[2px] sm:p-3 rounded-full"
          type="text"
          placeholder={`Whats in Your Mind ,${data?.user?.name} ?`}
        />
      </div>
      {File ? (
        <div
          onClick={() => {
            RemoveImage();
          }}
          className="flex justify-center items-center"
        >
          <img src={File} className="h-[150px] object-contain" alt="" />
        </div>
      ) : (
        ""
      )}

      {Type || File ? (
        <button
          onClick={() => {
            AddPost();
          }}
          className="p-[2px] sm:p-3 bg-[#3B82F6] text-white rounded-full sm:text-sm text-[10px]"
        >
          Add Post
        </button>
      ) : (
        ""
      )}

      <hr className="h-[3px] bg-gray-300 border-none rounded-full" />

      <div className="Bottom flex justify-between p-1 sm:text-sm text-[10px] text-gray-500">
        <div className="A flex items-center cursor-pointer">
          <img
            className="hover:animate-pulse sm:h-[30px] h-[15px]"
            src="/Emoji/Facebook.png"
            alt=""
          />
          <p className="p-1">Live Camera</p>
        </div>

        <div
          onClick={() => {
            Picker.current.click();
          }}
          className="B flex items-center cursor-pointer"
        >
          <img
            className="hover:animate-spin sm:h-[30px] h-[15px]"
            src="/Emoji/Photos.png"
            alt=""
          />
          <p className="p-1">Photos</p>
          <input
            ref={Picker}
            hidden
            type="file"
            id="file"
            onChange={SelectImage}
          />
        </div>

        <div className="C flex items-center cursor-pointer">
          <img
            className="hover:animate-bounce sm:h-[30px] h-[15px]"
            src="/Emoji/Smile.png"
            alt=""
          />
          <p className="p-1">Activity</p>
        </div>
      </div>
    </div>
  );
};
export default AddPost;
