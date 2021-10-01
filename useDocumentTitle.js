import { useEffect } from "react";

const useDocumentTitle = (docTitle) => {

    useEffect(() => {
        document.title = docTitle;
    }, [docTitle]);
    
}

export default useDocumentTitle;