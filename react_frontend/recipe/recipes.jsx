import {useEffect, useState} from "react";
import axios from "axios";


export function getCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/home/?format=json').then(res => {
            setCategories(res.data);
        })
    }, []);
    return categories;
}

export function getCategory() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/home/category/?format=json').then(res => {
            setCategory(res.data);
        })
    }, []);
    return category;
}

export function getRecipies() {
    const [recipies, setRecipies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/home/recipes/?format=json').then(res => {
            setRecipies(res.data);
        })
    }, []);
    return recipies;
}
