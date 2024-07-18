import { createContext, useState } from "react";

export const AppContext = createContext({

    galleryImages: [],
    setGalleryImages: () => { },
    program: "",
    setProgram: () => { },
    selectedOption: "",
    setSelectedOption: () => { },
    currentPage: 0,
    setCurrentPage: () => { },
    registrationData: "",
    setRegistrationData: () => { },
    publicId: "",
    setPublicId: () => { },
    selectedImage: [],
    setSelectedImage: () => { },
    ////////////////////////
    boardItem: [],
    setBoardItem: () => { },
    boardImage: "",
    setBoardImage: () => { },
    boardTitle: "",
    setBoardTitle: () => { },
    boardText: "",
    setBoardText: () => { },

    ////////////////////////
    loggedIn: false,
    setLoggedIn: () => { },
    adminData: "",
    setAdminData: () => { },
    ////////////////////////
    programA: [],
    setProgramA: () => { },
    programB: [],
    setProgramB: () => { },
    ////////////////////////
    loading: false,
    setLoading: () => { },
    altLoading: false,
    setAltLoading: () => { },


})

export const ContextProvider = ({ children }) => {

    const [galleryImages, setGalleryImages] = useState([])
    const [program, setProgram] = useState("")
    const [selectedOption, setSelectedOption] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [registrationData, setRegistrationData] = useState('')
    const [publicId, setPublicId] = useState("")
    const [selectedImage, setSelectedImage] = useState([]);

    ///////////////////////////////
    const [boardItem, setBoardItem] = useState([])
    const [boardImage, setBoardImage] = useState('')
    const [boardTitle, setBoardTitle] = useState('')
    const [boardText, setBoardText] = useState('')
    ///////////////////////////////
    const [loggedIn, setLoggedIn] = useState(false)
    const [adminData, setAdminData] = useState("")
    //////////////////////////////
    const [programA, setProgramA] = useState([])
    const [programB, setProgramB] = useState([])
    /////////////////////////////
    const [loading, setLoading] = useState(false)
    const [altLoading, setAltLoading] = useState(false)

    const contextValue = {
        galleryImages,
        setGalleryImages,
        program,
        setProgram,
        selectedOption,
        setSelectedOption,
        currentPage,
        setCurrentPage,
        registrationData,
        setRegistrationData,
        publicId,
        setPublicId,
        selectedImage,
        setSelectedImage,
        ////////////////////////////
        boardItem,
        setBoardItem,
        boardImage,
        setBoardImage,
        boardTitle,
        setBoardTitle,
        boardText,
        setBoardText,
        /////////////////
        loggedIn,
        setLoggedIn,
        adminData,
        setAdminData,
        //////////////
        programA,
        setProgramA,
        programB,
        setProgramB,
        ////////////////
        loading,
        setLoading,
        altLoading,
        setAltLoading
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}