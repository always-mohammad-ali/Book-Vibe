import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getAlreadyReadList, getStoredReadList } from "../../Utilities/addToDB";
import Book from "../Book/Book";

const ListedBooks = () => {
    const bookData = useLoaderData();
    const [readList, setReadList] = useState([])
    const [wishList, setWishList] = useState([])

    useEffect(() =>{
        const storedReadList = getStoredReadList();
        
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        console.log(storedReadList, bookData, storedReadListInt)

        const markReadList = bookData.filter(book => storedReadListInt.includes(book.bookId))
        
        setReadList(markReadList);


    },[])

    useEffect(() =>{
       const wishReadList = getAlreadyReadList();

       const wishReadListInt = wishReadList.map(id => parseInt(id));
       
       const compareWishReadList = bookData.filter(book => wishReadListInt.includes(book.bookId));
        
       setWishList(compareWishReadList)
    },[])

  return (
    <div className="text-black">
      
      
      <Tabs>
        <TabList>
          <Tab>Already Read</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="my-4 text-xl text-gray-400 font-bold">Already I had read : {readList.length}</h2>

          <div className="w-5/6 mx-auto grid grid-cols-3 items-center gap-8">
            {
             readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>

        </TabPanel>
        <TabPanel>
          <h2 className="my-4 text-xl text-gray-400 font-bold">Wish List : {wishList.length}</h2>
          <div className="w-5/6 mx-auto grid grid-cols-3 items-center gap-8">
            {
                wishList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
      </Tabs>
     
    </div>
  );
};

export default ListedBooks;
