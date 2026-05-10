import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import signInStyles from "../styles/signIn";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedConfirmPassword, setIsFocusedConfirmPassword] =
    useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignIn = () => {
    console.log("Sign In");
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={signInStyles.container}>
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

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={signInStyles.formContainer}
      >
        <View style={signInStyles.formContainer}>
          {/* email input */}
          <Text style={signInStyles.label}>Email Address</Text>
          <TextInput
            style={[signInStyles.input, isFocused && signInStyles.inputFocused]}
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
                value={password}
                onChangeText={setPassword}
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
      </KeyboardAvoidingView>

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
    </View>
  );
};

export default AuthPage;
