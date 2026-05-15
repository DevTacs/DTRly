import type {EmployeeRow} from "@/types/template-type"

type PreviewEmployeeDtrProps = {
    employeeInputs: EmployeeRow[]
}
export default function PreviewEmployeeDtr({
    employeeInputs,
}: PreviewEmployeeDtrProps) {
    return (
        <div className="bg-white shadow p-6 overflow-auto">
            <h1 className="text-3xl font-bold text-center mb-8">
                Daily Time Record
            </h1>

            <div className="text-sm pb-4">
                <div className="flex flex-row justify-between">
                    <h4>Name: John Doe</h4>
                    <h4>Position: Software Engineer</h4>
                </div>
                <div className="flex flex-row justify-between">
                    <h4>Department: DevOps</h4>
                    <h4>Period Covered: AUGUST</h4>
                </div>
            </div>

            <table className="w-full border-collapse">
                <thead>
                    {/* LEVEL 1 */}
                    <tr>
                        <th
                            rowSpan={2}
                            className="border border-black p-2 text-sm">
                            DATE
                        </th>

                        <th
                            colSpan={2}
                            className="border border-black p-2 text-sm">
                            REGULAR TIME
                        </th>

                        <th
                            colSpan={2}
                            className="border border-black p-2 text-sm">
                            OVERTIME
                        </th>

                        <th
                            rowSpan={2}
                            className="border border-black p-2 text-sm">
                            SIGNATURE
                        </th>
                    </tr>

                    {/* LEVEL 2 */}

                    {/* LEVEL 3 */}
                    <tr>
                        {/* REGULAR AM */}
                        <th className="border border-black p-2 text-sm">IN</th>
                        <th className="border border-black p-2 text-sm">OUT</th>

                        {/* OVERTIME AM */}
                        <th className="border border-black p-2 text-sm">IN</th>
                        <th className="border border-black p-2 text-sm">OUT</th>
                    </tr>
                </thead>

                <tbody>
                    {employeeInputs.map((input) => (
                        <tr key={input.date}>
                            {/* DATE */}
                            <td className="border border-black p-2 text-center text-sm">
                                {input.date}
                            </td>

                            {/* REGULAR TIME (AM IN/OUT, PM IN/OUT) */}
                            <td className="border border-black p-2 text-sm"></td>
                            <td className="border border-black p-2 text-sm"></td>

                            {/* OVERTIME (AM IN/OUT, PM IN/OUT) */}
                            <td className="border border-black p-2 text-sm"></td>
                            <td className="border border-black p-2 text-sm"></td>

                            {/* SIGNATURE */}
                            <td className="border border-black p-2 text-sm"></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-16 flex justify-between">
                <div className="text-center">
                    <div className="border-t border-black w-48 mx-auto mb-2"></div>
                    <p>Employee Signature</p>
                </div>

                <div className="text-center">
                    <div className="border-t border-black w-48 mx-auto mb-2"></div>
                    <p>Supervisor Signature</p>
                </div>
            </div>
        </div>
    )
}
