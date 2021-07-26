-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "front" TEXT NOT NULL,
    "back" TEXT NOT NULL,
    "reviewDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
