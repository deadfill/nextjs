/*
 Warnings:
 - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
 */

-- DropTable

DROP TABLE "Post";

-- CreateTable

CREATE TABLE
    "Product" (
        "id" TEXT NOT NULL,
        "name" TEXT NOT NULL,
        "count" TEXT NOT NULL,
        "price" TEXT NOT NULL,
        "country" TEXT NOT NULL,
        "descriptions" TEXT NOT NULL,
        "category" TEXT NOT NULL,
        CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
    );