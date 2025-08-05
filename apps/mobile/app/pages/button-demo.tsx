import { Button } from "@/components/ui/button";
import React from "react";
import { View, Text } from "react-native";
import { ScrollableLayout } from "@/components/layout/scrollable-layout";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ButtonDemo() {
  return (
    <ScrollableLayout contentClassName="p-4">
      <Text className="text-xl font-bold mb-6">Button Component</Text>

      <Text className="text-lg font-semibold mb-2">Default</Text>
      <View className="mb-4">
        <Button onPress={() => console.log("Default button pressed")}>
          Default Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Destructive</Text>
      <View className="mb-4">
        <Button
          variant="destructive"
          onPress={() => console.log("Destructive button pressed")}
        >
          Destructive Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Outline</Text>
      <View className="mb-4">
        <Button
          variant="outline"
          onPress={() => console.log("Outline button pressed")}
        >
          Outline Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Secondary</Text>
      <View className="mb-4">
        <Button
          variant="secondary"
          onPress={() => console.log("Secondary button pressed")}
        >
          Secondary Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Ghost</Text>
      <View className="mb-4">
        <Button
          variant="ghost"
          onPress={() => console.log("Ghost button pressed")}
        >
          Ghost Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Link</Text>
      <View className="mb-4">
        <Button
          variant="link"
          onPress={() => console.log("Link button pressed")}
        >
          Link Button
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Sizes</Text>
      <View className="space-y-2 gap-2 mb-4">
        <Button size="sm">Small Button</Button>
        <Button size="default">Default Button</Button>
        <Button size="lg">Large Button</Button>
      </View>

      <Text className="text-lg font-semibold mb-2">With Icons</Text>
      <View className="space-y-2 gap-2 mb-4">
        <Button
          leftIcon={
            <Ionicons name="arrow-back-outline" size={16} color="white" />
          }
        >
          Back
        </Button>
        <Button
          rightIcon={
            <Ionicons name="arrow-forward-outline" size={16} color="white" />
          }
        >
          Next
        </Button>
        <Button
          variant="outline"
          leftIcon={
            <Ionicons name="download-outline" size={16} color="black" />
          }
        >
          Download
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Icon Button</Text>
      <View className="mb-4">
        <Button
          size="icon"
          leftIcon={<Ionicons name="add-circle" size={16} color="white" />}
          aria-label="Add item"
        />
      </View>

      <Text className="text-lg font-semibold mb-2">Loading State</Text>
      <View className="space-y-2 gap-2 mb-4">
        <Button isLoading>Loading</Button>
        <Button variant="outline" isLoading>
          Loading
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Disabled</Text>
      <View className="space-y-2 gap-2 mb-4">
        <Button disabled>Disabled</Button>
        <Button variant="outline" disabled>
          Disabled Outline
        </Button>
      </View>

      <Text className="text-lg font-semibold mb-2">Router Link</Text>
      <View className="mb-4">
        <Button href="/components">Go to Home Page</Button>
      </View>
    </ScrollableLayout>
  );
}
