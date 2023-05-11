import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function StudyTable(props) {
    const quesAnsPair = props.quesAnsPair

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Questions</TableCell>
                        <TableCell align="left">Answer</TableCell>
                        <TableCell align="left">Correct</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {quesAnsPair.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.ques}</TableCell>
                            <TableCell align="left">{row.ans}</TableCell>
                            <TableCell align="left">{row.correct?"✅":"❌"}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}