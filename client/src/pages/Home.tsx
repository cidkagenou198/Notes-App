import { Link } from "react-router-dom";
import { Plus, Cloud, Shield, Zap } from "lucide-react";

import Notes from "@/components/notes/Notes";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Heading from "@/components/ui/heading";

const Home = () => {
  const token = localStorage.getItem("token");

  // If user is logged in, show notes
  if (token) {
    return <Notes />;
  }

  // Landing page for non-logged in users
  return (
    <div className="container py-10">
      <div className="text-center mb-12">
        <Heading 
          title="MiniNote" 
          description="Your personal note-taking companion in the cloud" 
          className="text-center mb-8"
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Link to="/signup">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Cloud className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <CardTitle>Cloud Sync</CardTitle>
            <CardDescription>
              Access your notes from anywhere, anytime with cloud synchronization
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Shield className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <CardTitle>Secure & Private</CardTitle>
            <CardDescription>
              Your notes are encrypted and secure with enterprise-grade security
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Zap className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
            <CardTitle>Lightning Fast</CardTitle>
            <CardDescription>
              Built for speed with modern technology for the best user experience
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to organize your thoughts?</h3>
        <p className="text-muted-foreground mb-6">
          Join thousands of users who trust MiniNote for their note-taking needs
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <Link to="/signup">
            <Plus className="mr-2 h-4 w-4" />
            Create Your First Note
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
