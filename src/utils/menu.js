/**
 * Recursively filters a menu list to exclude items that should be hidden.
 *
 * @param {Array} menuList - The list of menu items to filter.
 * @returns {Array} - A new list of menu items with hidden items removed.
 */
export function getShowMenuList(menuList) {
    let newMenuList = JSON.parse(JSON.stringify(menuList));

    return newMenuList.filter((item) => {
        item.children?.length && (item.children = getShowMenuList(item.children));
        return !item.meta?.isHide;
    });
}

/**
 * Recursively generates a breadcrumb list from a menu list.
 *
 * @param {Array} menuList - The list of menu items to process.
 * @param {Array} parent - The parent breadcrumb items.
 * @param {Object} result - The resulting breadcrumb list.
 * @returns {Object} - The complete breadcrumb list.
 */
export const getAllBreadcrumbList = (menuList, parent, result) => {
    for (const item of menuList) {
        result[item.path] = [...parent, item];
        if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
    }
    return result;
}

/**
 * @description Use recursive flat menus to add dynamic routes
 * @param {Array} menuList Menu List
 * @returns {Array}
 */
export function getFlatMenuList(menuList) {
    let newMenuList = JSON.parse(JSON.stringify(menuList));
    return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])]);
  }
