import api from "../../../api";

export const signIn = async (loginData) => {
  try {
    console.log("AJSDOIASJDOIASJDOIASDJOASIDJASOIDASOIDJAOISDAJOIDIOASDJOI", loginData)
    const response = await api.post('/login', loginData);
    console.log("response @ services/auth.js, ", response)

    if (response.data?.user) {
      console.log("@@@@@ Existe usuário, entrou no if")
      return response.data.user;
    }
  } catch (error) {
    return new Error(error)
  }
}