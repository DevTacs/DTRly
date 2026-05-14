type TemplateId = "intern" | "employee"

export type TemplateType = {
    id: TemplateId
    name: string
    image: string
}

export type EmployeeRow = {
    date: number
    regularTimeIn: string
    regularTimeOut: string
    overtimeIn: string
    overtimeOut: string
    signature: string
}

export type InternRow = {
    index: number
    timeIn: string
    timeOut: string
    hoursRendered: string
    supervisorInitial: string
}
