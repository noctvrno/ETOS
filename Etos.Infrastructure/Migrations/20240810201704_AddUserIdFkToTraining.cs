using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Etos.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddUserIdFkToTraining : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Trainings",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Trainings_UserId",
                table: "Trainings",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trainings_Users_UserId",
                table: "Trainings",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trainings_Users_UserId",
                table: "Trainings");

            migrationBuilder.DropIndex(
                name: "IX_Trainings_UserId",
                table: "Trainings");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Trainings");
        }
    }
}
