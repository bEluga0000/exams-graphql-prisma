/*
  Warnings:

  - Added the required column `papersId` to the `SubmittedPapers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubmittedPapers" ADD COLUMN     "papersId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "SubmittedAns" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,
    "submittedPaperId" TEXT NOT NULL,

    CONSTRAINT "SubmittedAns_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubmittedAns" ADD CONSTRAINT "SubmittedAns_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubmittedAns" ADD CONSTRAINT "SubmittedAns_submittedPaperId_fkey" FOREIGN KEY ("submittedPaperId") REFERENCES "SubmittedPapers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubmittedPapers" ADD CONSTRAINT "SubmittedPapers_papersId_fkey" FOREIGN KEY ("papersId") REFERENCES "Papers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
