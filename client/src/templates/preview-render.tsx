import type {TemplateType} from "@/types/template-type"
import {previewMap} from "./preview-map"

type PreviewRenderProps = {
    selectedTemplate: TemplateType
    ranges: number[]
}
export default function PreviewRender({
    selectedTemplate,
    ranges,
}: PreviewRenderProps) {
    const Component = previewMap[selectedTemplate.id]
    return <Component ranges={ranges} />
}
