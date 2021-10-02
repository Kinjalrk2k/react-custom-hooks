import { useEffect } from "react";

const useTitleCount =(count,title) => {

    useEffect(() => {
        
        if(count >=1){

            document.title = `(${count}) ${title}`;
        }
        else{

            document.title = title;
        }
        
    },[count,title])

}
export default useTitleCount;
