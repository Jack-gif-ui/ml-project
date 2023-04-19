export function generateRoutes(asyncRoutes,roles) {
    return dispatch=>{
        let accessRoutes = []
        accessRoutes = filterAsyncRoutes(asyncRoutes,roles)
        dispatch({type:"USER_PERMISSION",payload:accessRoutes})
    }
}

export function filterAsyncRoutes(routes,roles){
    const res = []
    routes.forEach(route => {
        const tmp = {
            ...route
        }

        if (hasPermission(roles,tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children,roles)
            }
            res.push(tmp)
        }
    });
}

// tmp 每一个规则
//hasPermission 判断一个角色是否有访问某个路由权限
export function hasPermission(roles,route) {
    if (route.meta&&route.meta.roles) {
        return roles.some(role=>route.meta.roles.include(role))
    }else{
        return true
    }
}