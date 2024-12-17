using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace CarManagementApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "CarBrands",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Country = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarBrands", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Cars",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    BrandId = table.Column<int>(type: "int", nullable: false),
                    Model = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Year = table.Column<int>(type: "int", nullable: false),
                    Features = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cars", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cars_CarBrands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "CarBrands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "CarBrands",
                columns: new[] { "Id", "Country", "Name" },
                values: new object[,]
                {
                    { 1, "Japan", "Toyota" },
                    { 2, "USA", "Ford" },
                    { 3, "Germany", "BMW" },
                    { 4, "Japan", "Honda" },
                    { 5, "USA", "Chevrolet" }
                });

            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "Id", "BrandId", "Features", "Model", "Year" },
                values: new object[,]
                {
                    { 1, 1, "Hybrid, Sedan", "Camry", 2022 },
                    { 2, 1, "Compact, Efficient", "Corolla", 2021 },
                    { 3, 1, "Compact SUV, AWD", "RAV4", 2023 },
                    { 4, 1, "Hybrid, Eco-Friendly", "Prius", 2020 },
                    { 5, 2, "Sport, V8 Engine", "Mustang", 2021 },
                    { 6, 2, "Pickup Truck, Towing Capacity", "F-150", 2022 },
                    { 7, 2, "SUV, Family Car", "Explorer", 2023 },
                    { 8, 2, "Compact, Efficient", "Focus", 2020 },
                    { 9, 3, "Luxury SUV", "X5", 2020 },
                    { 10, 3, "Luxury Sedan, Sporty", "3 Series", 2021 },
                    { 11, 3, "Executive Sedan, Comfort", "5 Series", 2022 },
                    { 12, 3, "High-Performance Sedan", "M3", 2023 },
                    { 13, 4, "Compact, Reliable", "Civic", 2021 },
                    { 14, 4, "Midsize Sedan, Fuel Efficient", "Accord", 2022 },
                    { 15, 4, "SUV, AWD", "CR-V", 2023 },
                    { 16, 4, "SUV, Spacious", "Pilot", 2020 },
                    { 17, 5, "Pickup Truck, Durable", "Silverado", 2021 },
                    { 18, 5, "Midsize Sedan, Comfortable", "Malibu", 2022 },
                    { 19, 5, "Full-Size SUV, Powerful", "Tahoe", 2023 },
                    { 20, 5, "Sport Coupe, Iconic", "Camaro", 2020 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cars_BrandId",
                table: "Cars",
                column: "BrandId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cars");

            migrationBuilder.DropTable(
                name: "CarBrands");
        }
    }
}
