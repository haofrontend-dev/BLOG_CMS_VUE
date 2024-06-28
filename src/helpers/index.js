export function convertChildrenToItems(routes) {
    routes.forEach(route => {
        if (route.children) {
            route.items = route.children;
            delete route.children;
            convertChildrenToItems(route.items); // Recursively apply to nested children
        }
    });
    return routes;
}
