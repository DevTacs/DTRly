export default function PreviewInternDtr({ranges}: {ranges: number[]}) {
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
                    <tr>
                        <th className="border border-black p-2 text-sm">
                            DATE
                        </th>

                        <th className="border border-black p-2 text-sm">
                            TIME IN
                        </th>

                        <th className="border border-black p-2 text-sm">
                            TIME OUT
                        </th>

                        <th className="border border-black p-2 text-sm">
                            HOURS RENDERED
                        </th>
                        <th className="border border-black p-2 text-sm">
                            SUPERVISOR INITIAL
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {ranges &&
                        ranges.map((_, i) => (
                            <tr key={i}>
                                {/* DATE */}
                                <td className="border border-black p-2 text-center text-sm">
                                    {i + 1}
                                </td>
                                <td className="border border-black p-2 text-sm"></td>
                                <td className="border border-black p-2 text-sm"></td>
                                <td className="border border-black p-2 text-sm"></td>
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
