import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { authService } from "../services/auth.service";
import signInStyles from "../styles/signIn";

const AuthPage = ({ setIsLoggedIn }: { setIsLoggedIn: (value: boolean) => void }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    
  }, []);

  const handleSignIn = async () => {
    console.log("Sign In");
    try {
      if (isSignUp) {
        if (!username || !email || !password) {
          alert("Please fill in all required fields.");
          return;
        }
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
        
        const response = await authService.register({ username, email, password });
        console.log("Register response:", response);
        alert("Registration successful! Please sign in.");
        setIsSignUp(false);
      } else {
        if (!email || !password) {
          alert("Please enter email and password.");
          return;
        }
        
        const response = await authService.login({ email, password });
        console.log("Login response:", response);
        alert("Login successful!");
        setIsLoggedIn(true);
      }
    } catch (error: any) {
      console.error("Auth error:", error.response?.data || error.message);
      // If the backend sends a 422, it usually means validation failed.
      const errorMessage = error.response?.data?.message || "Something went wrong. Please try again.";
      alert(`Error: ${errorMessage}`);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#F5F5F2" }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[signInStyles.container, { flexGrow: 1 }]}
      >
      {/* logo */}
      <View>
        <Image
          source={require("../../assets/icon/logo_by_me.png")}
          style={{
            width: 70,
            height: 70,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "#2D2D2D",
        }}
      >
        {isSignUp ? "Sign Up For Free" : "Sign In"}
      </Text>

      <Text style={signInStyles.subtitle}>
        Let's experience the joy of telecare AI.
      </Text>

      <View style={signInStyles.formContainer}>
          {isSignUp && (
            <View style={signInStyles.formContainer}>
              {/* username input */}
              <Text style={signInStyles.label}>Username</Text>
              <TextInput
                style={[
                  signInStyles.input,
                  usernameFocused && signInStyles.inputFocused,
                ]}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                onFocus={() => setUsernameFocused(true)}
                onBlur={() => setUsernameFocused(false)}
              />
            </View>
          )}
          <View style={signInStyles.formContainer}>
            {/* email input */}
            <Text style={signInStyles.label}>Email Address</Text>
            <TextInput
              style={[
                signInStyles.input,
                isFocused && signInStyles.inputFocused,
              ]}
              placeholder="example@gmail.com"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {/* password input */}
            <Text style={signInStyles.label}>Password</Text>
            <TextInput
              style={[
                signInStyles.input,
                isFocusedPassword && signInStyles.inputFocused,
              ]}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
            />

            {/* Confirm password */}
            {isSignUp && (
              <>
                <Text style={signInStyles.label}>Confirm Password</Text>
                <TextInput
                  style={[
                    signInStyles.input,
                    isFocusedConfirmPassword && signInStyles.inputFocused,
                  ]}
                  placeholder="Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry
                  onFocus={() => setIsFocusedConfirmPassword(true)}
                  onBlur={() => setIsFocusedConfirmPassword(false)}
                />
              </>
            )}

            {/* sign in button using pressable */}
            <Pressable style={signInStyles.button} onPress={handleSignIn}>
              <Text style={signInStyles.buttonText}>
                {" "}
                {isSignUp ? "Sign Up" : "Sign In"}{" "}
              </Text>
            </Pressable>
          </View>
      </View>

      {isSignUp == false && (
        <>
          <View style={signInStyles.socialContainer}>
            <TouchableOpacity style={signInStyles.socialButton}>
              <FontAwesome name="facebook" size={32} color="#2D2D2D" />
            </TouchableOpacity>

            <TouchableOpacity style={signInStyles.socialButton}>
              <AntDesign name="google" size={30} color="#2D2D2D" />
            </TouchableOpacity>

            <TouchableOpacity style={signInStyles.socialButton}>
              <Ionicons name="logo-instagram" size={30} color="#2D2D2D" />
            </TouchableOpacity>
          </View>
        </>
      )}

      <Text style={signInStyles.accountText}>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <Text
          style={signInStyles.greenText}
          onPress={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Sign In" : "Sign Up"}{" "}
        </Text>
      </Text>

      {isSignUp == false && (
        <>
          <Text style={signInStyles.forgotText}>Forgot your password?</Text>
        </>
      )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthPage;
