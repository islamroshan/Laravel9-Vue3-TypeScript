import axios from "axios";
// import ProgressBar from "./ProgressBar";
// import store from "../store/store";
class UserAuth {
	baseUrl = 'api';
	async checkAuth() {
		// ProgressBar.progressBar()
		await axios.get('/sanctum/csrf-cookie');
		return axios.post(this.baseUrl + '/checkauth')
	}

	async create(data: any): Promise<any> {
		await axios.get('/sanctum/csrf-cookie');
		return axios.post("/register", data);
	}

	// async login(data: any): Promise<any> {
	// 	console.log(data)
    //     let formData = new FormData()
	// 	formData.append('email', data.email)
	// 	formData.append('password', data.password)

	// 	await axios.get("/sanctum/csrf-cookie");
	// 	return axios.post("/login", formData);
	// }

	async login(data: any): Promise<any> {
		// ProgressBar.progressBar()
		await axios.get('/sanctum/csrf-cookie');
		return axios.post(this.baseUrl + "/login", data);
	}
 
	async logout(): Promise<any> {
		// ProgressBar.progressBar()
		await axios.get('/sanctum/csrf-cookie');
		return axios.post(this.baseUrl + "/logout");
	}

	getSignature(data: any) {
		return axios.post(this.baseUrl + '/signature', data)
	}
}

export default new UserAuth();