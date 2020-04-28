import axios from "axios";


const instance = axios.create ({
	baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`,
});

const api = {
	getServerStatus (status) {
		return instance.post ('', { success: status });
	}
}

export const tryCatch = async (status) => {
	try {
		const response = await api.getServerStatus (status);
		console.log ('answer:', response.data);
		return response.data.info;
	} catch (e) {
		console.log ('error:', { ...e });
		return e.response.data.info;
	}
}

