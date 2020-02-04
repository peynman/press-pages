import LppTemplateSignin from '../temlates/Signin'

export const pageComponents = {
    'lpp-template-signin': LppTemplateSignin,
};

export default {
    install(Vue, options) {
        const register = function (Vue, components) {
            for (let comp in components) {
                if (components.hasOwnProperty(comp)) {
                    Vue.component(comp, components[comp])
                }
            }
        };

        register(Vue, pageComponents);
    },

    LppTemplateSignin,
}