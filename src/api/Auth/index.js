// * IMPORT
import MenuInit from '@/assets/json/authMenu.json'

class AuthApi {
    getAuthMenuListApi = () => {
        return new Promise((resolve, reject) => {
            resolve(MenuInit)
        })
    }
}

export default new AuthApi();
