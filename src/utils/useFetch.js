import { useEffect, useReducer } from 'react';



 const useFetch = (url) => {
    const initialState = {
        status: 'loading',
        error: null,
        data: [],
    };

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'LOADING':
                return { ...initialState, status: 'loading' };
            case 'SUCCESS':
                return { ...initialState, status: 'success', data: action.payload };
            case 'ERROR':
                return { ...initialState, status: 'error', error: action.payload };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        // let our data fetching logic know about the state (mounted/unmounted) of the component
        let cancelRequest = false;
        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: 'LOADING' });
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    if (!cancelRequest) {
                        dispatch({ type: 'SUCCESS', payload: data });
                    }
                } catch (error) {
                    if (!cancelRequest) {
                    dispatch({ type: 'ERROR', payload: error.message });
                 }
                }
            
        };

        fetchData();

  // preventing to set the component state after the data fetching has been asynchronously resolved 
  // runs when a component unmounts
        return function cleanup() {
            cancelRequest = true;
        };
    }, [url]);

    return state;
};

export  default useFetch;