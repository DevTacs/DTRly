import {templateMap} from "./template-map"
import type {TemplateType} from "@/types/template-type"

type TemplateRenderProps = {
    selectedTemplate: TemplateType
    ranges: number[]
}

export default function TemplateRender({
    selectedTemplate,
    ranges,
}: TemplateRenderProps) {
    const Component = templateMap[selectedTemplate.id]
    return <Component ranges={ranges} />
}
