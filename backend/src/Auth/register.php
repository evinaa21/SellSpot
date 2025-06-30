<?php
// filepath: c:\xampp\htdocs\SellSpot\backend\api\auth\register.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../../src/Models/User.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
$required_fields = ['email', 'password', 'full_name'];
foreach ($required_fields as $field) {
    if (!isset($input[$field]) || empty(trim($input[$field]))) {
        http_response_code(400);
        echo json_encode(['error' => "Field '$field' is required"]);
        exit;
    }
}

// Validate email format
if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email format']);
    exit;
}

// Validate password strength
if (strlen($input['password']) < 6) {
    http_response_code(400);
    echo json_encode(['error' => 'Password must be at least 6 characters long']);
    exit;
}

try {
    $user = new User();

    // Check if email already exists
    if ($user->findByEmail($input['email'])) {
        http_response_code(409);
        echo json_encode(['error' => 'Email already registered']);
        exit;
    }

    // Create new user
    $user = new User();
    $user->email = trim($input['email']);
    $user->password_hash = password_hash($input['password'], PASSWORD_DEFAULT);
    $user->full_name = trim($input['full_name']);
    $user->phone = isset($input['phone']) ? trim($input['phone']) : null;
    $user->bio = isset($input['bio']) ? trim($input['bio']) : null;
    $user->location_lat = isset($input['location_lat']) ? $input['location_lat'] : null;
    $user->location_lng = isset($input['location_lng']) ? $input['location_lng'] : null;
    $user->address = isset($input['address']) ? trim($input['address']) : null;
    $user->verification_token = bin2hex(random_bytes(32));

    if ($user->create()) {
        // Return success (without sensitive data)
        $response = [
            'success' => true,
            'message' => 'User registered successfully',
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
                'full_name' => $user->full_name,
                'email_verified' => false
            ],
            'verification_token' => $user->verification_token // In real app, send this via email
        ];

        http_response_code(201);
        echo json_encode($response);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create user']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
}
?>