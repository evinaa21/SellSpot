<?php
// filepath: c:\xampp\htdocs\SellSpot\backend\src\Models\User.php
require_once '../../config/database.php';

class User
{
    private $conn;
    private $table = 'users';

    // User properties
    public $id;
    public $email;
    public $password_hash;
    public $full_name;
    public $phone;
    public $bio;
    public $avatar_url;
    public $location_lat;
    public $location_lng;
    public $address;
    public $rating;
    public $total_ratings;
    public $email_verified;
    public $verification_token;
    public $is_active;
    public $created_at;
    public $updated_at;

    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->connect();
    }

    // Create new user
    public function create()
    {
        $query = "INSERT INTO " . $this->table . " 
                 (email, password_hash, full_name, phone, bio, location_lat, location_lng, address, verification_token) 
                 VALUES (:email, :password_hash, :full_name, :phone, :bio, :location_lat, :location_lng, :address, :verification_token)";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->full_name = htmlspecialchars(strip_tags($this->full_name));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->bio = htmlspecialchars(strip_tags($this->bio));
        $this->address = htmlspecialchars(strip_tags($this->address));

        // Bind values
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':password_hash', $this->password_hash);
        $stmt->bindParam(':full_name', $this->full_name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':bio', $this->bio);
        $stmt->bindParam(':location_lat', $this->location_lat);
        $stmt->bindParam(':location_lng', $this->location_lng);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':verification_token', $this->verification_token);

        if ($stmt->execute()) {
            $this->id = $this->conn->lastInsertId();
            return true;
        }

        return false;
    }

    // Get user by email
    public function findByEmail($email)
    {
        $query = "SELECT * FROM " . $this->table . " WHERE email = :email LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->setFromArray($row);
            return true;
        }

        return false;
    }

    // Get user by ID
    public function findById($id)
    {
        $query = "SELECT * FROM " . $this->table . " WHERE id = :id LIMIT 1";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            $this->setFromArray($row);
            return true;
        }

        return false;
    }

    // Update user
    public function update()
    {
        $query = "UPDATE " . $this->table . " 
                 SET full_name = :full_name, phone = :phone, bio = :bio, 
                     location_lat = :location_lat, location_lng = :location_lng, 
                     address = :address, avatar_url = :avatar_url
                 WHERE id = :id";

        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->full_name = htmlspecialchars(strip_tags($this->full_name));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->bio = htmlspecialchars(strip_tags($this->bio));
        $this->address = htmlspecialchars(strip_tags($this->address));

        // Bind values
        $stmt->bindParam(':full_name', $this->full_name);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':bio', $this->bio);
        $stmt->bindParam(':location_lat', $this->location_lat);
        $stmt->bindParam(':location_lng', $this->location_lng);
        $stmt->bindParam(':address', $this->address);
        $stmt->bindParam(':avatar_url', $this->avatar_url);
        $stmt->bindParam(':id', $this->id);

        return $stmt->execute();
    }

    // Verify email
    public function verifyEmail($token)
    {
        $query = "UPDATE " . $this->table . " 
                 SET email_verified = 1, verification_token = NULL 
                 WHERE verification_token = :token";

        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(':token', $token);

        return $stmt->execute() && $stmt->rowCount() > 0;
    }

    // Helper method to set properties from array
    private function setFromArray($data)
    {
        $this->id = $data['id'];
        $this->email = $data['email'];
        $this->password_hash = $data['password_hash'];
        $this->full_name = $data['full_name'];
        $this->phone = $data['phone'];
        $this->bio = $data['bio'];
        $this->avatar_url = $data['avatar_url'];
        $this->location_lat = $data['location_lat'];
        $this->location_lng = $data['location_lng'];
        $this->address = $data['address'];
        $this->rating = $data['rating'];
        $this->total_ratings = $data['total_ratings'];
        $this->email_verified = $data['email_verified'];
        $this->verification_token = $data['verification_token'];
        $this->is_active = $data['is_active'];
        $this->created_at = $data['created_at'];
        $this->updated_at = $data['updated_at'];
    }

    // Convert to array (useful for JSON responses)
    public function toArray()
    {
        return [
            'id' => $this->id,
            'email' => $this->email,
            'full_name' => $this->full_name,
            'phone' => $this->phone,
            'bio' => $this->bio,
            'avatar_url' => $this->avatar_url,
            'location_lat' => $this->location_lat,
            'location_lng' => $this->location_lng,
            'address' => $this->address,
            'rating' => $this->rating,
            'total_ratings' => $this->total_ratings,
            'email_verified' => $this->email_verified,
            'is_active' => $this->is_active,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
?>