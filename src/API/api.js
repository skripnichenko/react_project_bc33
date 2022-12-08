import axios from 'axios';

axios.defaults.baseURL = "https://63246b94bb2321cba92c1c04.mockapi.io";

export const CitiesApi = {
    async getCities() {
        const {data} = await axios.get("/cities");
        return data
    },
    async deleteCity(id) {
        const {data} = await axios.delete(`/cities/${id}`)
        return data
    },
    async changeCity(id, cityObj) {
        const {data} = await axios.put(`/cities/${id}`, cityObj)
        return data
    },
    async addCity(cityObj) {
        const {data} = await axios.post(`/cities`, cityObj)
        return data
    }
}

export const FacultiesApi = {
    async getFaculties() {
        const {data} = await axios.get("/departments");
        return data
    },
    async deleteFaculty(id) {
        const {data} = await axios.delete(`/departments/${id}`)
        return data
    },
    async changeFaculty(id, facultyObj) {
        const {data} = await axios.put(`/departments/${id}`, facultyObj)
        return data
    },
    async addFaculty(facultyObj) {
        const {data} = await axios.post(`/departments`, facultyObj)
        return data
    }
}

export const TutorsApi = {
    async getTutors() {
        const {data} = await axios.get("/tutors");
        return data
    },
    async addTutor(tutorObj) {
        const {data} = await axios.post(`/tutors`, tutorObj)
        return data
    }
}