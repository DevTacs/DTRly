type TemplateId = "intern" | "employee"

export type TemplateType = {
    id: TemplateId
    name: string
    image: string
}

export type EmployeeRow = {
    date: string
    regularTimeIn: string
    regularTimeOut: string
    overtimeIn: string
    overtimeOut: string
    signature: string
}

export type InternRow = {
    date: string
    timeIn: string
    timeOut: string
    hoursRendered: string
    supervisorInitial: string
}
