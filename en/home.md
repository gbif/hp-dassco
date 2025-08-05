---
lang-ref: home
layout: home
title: Danish System of Scientific Collections
description: Part of the European Project DiSSCo
background:  "{{ site.data.images.shells_with_barcode.src }}"
imageLicense: "{{ site.data.images.shells_with_barcode.caption }}"
height: 90vh
cta:
  - text: Specimens
    href: /occurrence/search
    isPrimary: true
  - text: Datasets
    href: /dataset/search
  - text: About
    href: /about
composition:
  - type: heroImage # the block type
  - type: stats
    data: examples.stats
  - type: split
    data: examples.herbariumImageExample
  - type: features
    data: examples.couldBeAnyName
permalink: /
---

const Index = () => {
  const backgroundImages = [heroImage, heroSpecimens, heroButterflies, heroFossils];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-end space-x-8">
            <a href="#" className="text-white hover:text-white/80 font-medium">HOME</a>
            <a href="#" className="text-white hover:text-white/80 font-medium">ABOUT</a>
            <a href="#" className="text-white hover:text-white/80 font-medium">NEWS AND STORIES</a>
            <a href="#" className="text-white hover:text-white/80 font-medium">ACCESS DATA</a>
            <a href="#" className="text-white hover:text-white/80 font-medium">DIGITISATION</a>
            <a href="#" className="text-white hover:text-white/80 font-medium">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Images with Smooth Transitions */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="text-center text-white z-10 max-w-4xl px-6">
          <h1 className="text-6xl font-bold mb-4 tracking-wide">
            DANISH SYSTEM OF SCIENTIFIC COLLECTIONS
          </h1>
          <p className="text-xl font-light tracking-wider">
            Part of the European Project DiSSCo
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Digitising Natural History in Denmark
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are digitising Denmark's estimated 19 million natural specimens. We are committed to sharing our data and knowledge globally so that everyone can benefit.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">What is DaSSCo?</h3>
                <p className="text-muted-foreground mb-6">
                  DaSSCo is a national mass digitisation program and research infrastructure. We are experts in the digitisation of natural history.
                </p>
                <Button variant="link" className="p-0 text-primary">
                  Learn more →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Why DaSSCo?</h3>
                <p className="text-muted-foreground mb-6">
                  Denmark's rich natural history collections contain data that can help tackle urgent scientific and societal issues. Our mission is to make that data accessible.
                </p>
                <Button variant="link" className="p-0 text-primary">
                  Learn more →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">Who are we?</h3>
                <p className="text-muted-foreground mb-6">
                  DaSSCo is a collaboration between Natural History Museum Denmark, Science Museums Aarhus University, the Natural History Museum Aarhus and the Technical University of Denmark.
                </p>
                <Button variant="link" className="p-0 text-primary">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Read more about DaSSCo
            </Button>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-foreground">News and Stories</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Stay updated! Read the latest DaSSCo</h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-primary">Find information on Social Media</h4>
                <p className="text-muted-foreground">
                  Want to be updated on the latest news from DaSSCo institutions?
                </p>
                <p className="text-muted-foreground">
                  Check out our institution's Facebook and LinkedIn. They are updated regularly with the latest information.
                </p>
                <p className="font-semibold">Follow today!</p>
                <div className="flex space-x-4">
                  <Button variant="outline">Follow on Facebook</Button>
                  <Button variant="outline">Follow on LinkedIn</Button>
                </div>
              </div>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">News Image Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Access Data Section */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Access Our Data</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore Denmark's digital natural history collections. Our data is freely available for research, education, and conservation efforts worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Digital Collections</h3>
                <p className="text-muted-foreground mb-6">
                  Browse our extensive digital collections of natural history specimens, including detailed images and metadata.
                </p>
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Explore Collections
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Data Portal</h3>
                <p className="text-muted-foreground mb-6">
                  Access our comprehensive data portal with advanced search capabilities and download options for researchers.
                </p>
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Visit Data Portal
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Institutions Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Partner Institutions</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="font-bold text-primary mb-2">Natural History Museum Denmark</h3>
                <p className="text-sm text-muted-foreground">University of Copenhagen</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="font-bold text-primary mb-2">Science Museums</h3>
                <p className="text-sm text-muted-foreground">Aarhus University</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="font-bold text-primary mb-2">Natural History Museum Aarhus</h3>
                <p className="text-sm text-muted-foreground">Aarhus Municipality</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary rounded"></div>
                </div>
                <h3 className="font-bold text-primary mb-2">Technical University of Denmark</h3>
                <p className="text-sm text-muted-foreground">DTU</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-6">Contact Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for questions about digitisation, data access, or collaboration opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-primary mb-3">General Inquiries</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For general questions about DaSSCo and our services
                </p>
                <Button variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-primary mb-3">Data Access</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Questions about accessing our digital collections
                </p>
                <Button variant="outline">Data Support</Button>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-primary mb-3">Collaboration</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Interested in partnering with DaSSCo
                </p>
                <Button variant="outline">Partner With Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">DaSSCo</h3>
              <p className="text-sm opacity-90">
                Danish System of Scientific Collections - Digitising natural history for the future.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">About DaSSCo</a></li>
                <li><a href="#" className="hover:opacity-100">Our Mission</a></li>
                <li><a href="#" className="hover:opacity-100">Partner Institutions</a></li>
                <li><a href="#" className="hover:opacity-100">Publications</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">Digital Collections</a></li>
                <li><a href="#" className="hover:opacity-100">Data Portal</a></li>
                <li><a href="#" className="hover:opacity-100">Digitisation Services</a></li>
                <li><a href="#" className="hover:opacity-100">Research Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><a href="#" className="hover:opacity-100">Contact Us</a></li>
                <li><a href="#" className="hover:opacity-100">Newsletter</a></li>
                <li><a href="#" className="hover:opacity-100">Facebook</a></li>
                <li><a href="#" className="hover:opacity-100">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-75">
              © 2024 DaSSCo - Danish System of Scientific Collections. Part of the European Project DiSSCo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
