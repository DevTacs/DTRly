export default function EmployeeForm({ranges}: {ranges: number[]}) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Employee DTR</h2>

            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                    <thead>
                        {/* LEVEL 1 */}
                        <tr>
                            <th
                                rowSpan={3}
                                className="border border-black p-2 text-sm">
                                DATE
                            </th>

                            <th
                                colSpan={4}
                                className="border border-black p-2 text-sm">
                                REGULAR TIME
                            </th>

                            <th
                                colSpan={4}
                                className="border border-black p-2 text-sm">
                                OVERTIME
                            </th>

                            <th
                                rowSpan={3}
                                className="border border-black p-2 text-sm">
                                SIGNATURE
                            </th>
                        </tr>

                        {/* LEVEL 2 */}
                        <tr>
                            {/* REGULAR */}
                            <th
                                colSpan={2}
                                className="border border-black p-2 text-sm">
                                AM
                            </th>
                            <th
                                colSpan={2}
                                className="border border-black p-2 text-sm">
                                PM
                            </th>

                            {/* OVERTIME */}
                            <th
                                colSpan={2}
                                className="border border-black p-2 text-sm">
                                AM
                            </th>
                            <th
                                colSpan={2}
                                className="border border-black p-2 text-sm">
                                PM
                            </th>
                        </tr>

                        {/* LEVEL 3 */}
                        <tr>
                            {/* REGULAR AM */}
                            <th className="border border-black p-2 text-sm">
                                IN
                            </th>
                            <th className="border border-black p-2 text-sm">
                                OUT
                            </th>

                            {/* REGULAR PM */}
                            <th className="border border-black p-2 text-sm">
                                IN
                            </th>
                            <th className="border border-black p-2 text-sm">
                                OUT
                            </th>

                            {/* OVERTIME AM */}
                            <th className="border border-black p-2 text-sm">
                                IN
                            </th>
                            <th className="border border-black p-2 text-sm">
                                OUT
                            </th>

                            {/* OVERTIME PM */}
                            <th className="border border-black p-2 text-sm">
                                IN
                            </th>
                            <th className="border border-black p-2 text-sm">
                                OUT
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({length: 10}).map((_, i) => (
                            <tr key={i}>
                                {/* DATE */}
                                <td className="border border-black p-2 text-center text-sm">
                                    {i + 1}
                                </td>

                                {/* REGULAR TIME (AM IN/OUT, PM IN/OUT) */}
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* OVERTIME (AM IN/OUT, PM IN/OUT) */}
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="time"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>

                                {/* SIGNATURE */}
                                <td className="border border-black p-2 text-sm">
                                    <input
                                        type="text"
                                        className="w-full border p-1 rounded"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
