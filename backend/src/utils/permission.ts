import { Permission } from "src/entities/Permission"

export const mapPermission = (permissions: Permission[]) => {
    const groupBySubject = permissions.reduce((group, permission) => {
        const { subject } = permission
        group[subject] = group[subject] ?? []
        group[subject].push(permission)
        return group
    }, {})

    const permissionMap = {}

    for (const key of Object.keys(groupBySubject)) {
        permissionMap[key] = []
        groupBySubject[key].forEach((item) => {
            permissionMap[key].push(item.action)
        })
    }

    return permissionMap
}
