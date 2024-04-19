import { createStore } from 'vuex';
export default createStore({
    state() {
        return {
            apiBaseUrl:"http://13.124.119.89:9000"
            //apiBaseUrl:"http://localhost:9000"
            //${this.$store.state.apiBaseUrl}
        };
    },
    mutations: {
    },
    plugins: [
        /*
        createPersistedState({
            paths: ['authUser', 'token']
        })
        */
    ]   //브라우저 새로고침하면 사라져서(로그인 풀려서) 저장하기 위함
});