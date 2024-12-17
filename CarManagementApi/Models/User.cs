using System.ComponentModel.DataAnnotations;

public class User
{
    [Key]
    public int Id { get; set; }

    [Required]
    [MaxLength(50)]
    public string Username { get; set; }

    [Required]
    public string PasswordHash { get; set; } // Store hashed passwords for security

    [MaxLength(20)]
    public string Role { get; set; } // e.g., "Admin", "User"
}