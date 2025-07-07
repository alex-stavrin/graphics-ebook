import React from "react";
import { InlineMath } from "react-katex";

const MatrixMath = ({ matrix, className = "" }) => {

    let body = "";
    for(let i = 0; i < matrix.length; i++)
    {
        let row = matrix[i];
        let currentRow = "";
        for(let j = 0; j < row.length; j++)
        {
            if(j < row.length - 1)
            {
                currentRow += row[j] + " & "
            }
            else
            {
                currentRow += row[j];
            }
        }
        if(i < matrix.length - 1)
        {

            body += currentRow + " \\\\ ";
        }
        else
        {
            body += currentRow;
        }
    }
    let latexMath = `\\begin{bmatrix} ${body} \\end{bmatrix}`

  return (
    <span className={className}>
      <InlineMath math={latexMath} />
    </span>
  );
};

export default MatrixMath;
