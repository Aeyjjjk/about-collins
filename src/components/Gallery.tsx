import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { galleryData } from "@/data/portfolio-data";
import { X, Sparkles, ChevronLeft, ChevronRight, Download, Info, ZoomIn, ZoomOut, RotateCcw, Move } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showZoomControls, setShowZoomControls] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Handle escape key for fullscreen mode
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && fullscreenIndex !== null) {
        closeFullscreen();
      }
      if ((e.key === "ArrowLeft" || e.key === "ArrowRight") && fullscreenIndex !== null) {
        e.preventDefault();
        handleNavigation(e.key === "ArrowLeft" ? -1 : 1);
      }
      // Zoom controls with +/- keys
      if ((e.key === "+" || e.key === "=") && fullscreenIndex !== null && e.ctrlKey) {
        e.preventDefault();
        handleZoomIn();
      }
      if ((e.key === "-" || e.key === "_") && fullscreenIndex !== null && e.ctrlKey) {
        e.preventDefault();
        handleZoomOut();
      }
      if (e.key === "0" && fullscreenIndex !== null && e.ctrlKey) {
        e.preventDefault();
        resetZoom();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    
    // Handle click outside
    const handleClickOutside = (e: MouseEvent) => {
      if (fullscreenRef.current && 
          !fullscreenRef.current.contains(e.target as Node) && 
          fullscreenIndex !== null) {
        closeFullscreen();
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    // Handle wheel zoom
    const handleWheel = (e: WheelEvent) => {
      if (fullscreenIndex !== null && e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
          handleZoomIn();
        } else {
          handleZoomOut();
        }
      }
    };
    
    document.addEventListener("wheel", handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("wheel", handleWheel);
    };
  }, [fullscreenIndex]);

  useEffect(() => {
    // Reset zoom and position when changing images
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [fullscreenIndex]);

  const getGridClasses = (size: string) => {
    if (isMobile) return "col-span-1";
    
    switch (size) {
      case "large":
        return "lg:col-span-2 lg:row-span-2";
      case "medium":
        return "lg:col-span-1 lg:row-span-2";
      default:
        return "lg:col-span-1";
    }
  };

  const getAspectRatio = (size: string) => {
    if (isMobile) return "aspect-[4/3]";
    
    switch (size) {
      case "large":
        return "aspect-[16/10]";
      case "medium":
        return "aspect-[4/5]";
      default:
        return "aspect-[4/3]";
    }
  };

  const openFullscreen = (index: number) => {
    setFullscreenIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = "unset";
  };

  const handleNavigation = (direction: number) => {
    if (isAnimating || fullscreenIndex === null) return;
    
    setIsAnimating(true);
    const newIndex = (fullscreenIndex + direction + galleryData.length) % galleryData.length;
    
    setTimeout(() => {
      setFullscreenIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 5));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    
    // If it was a quick swipe and we're at scale 1, navigate
    if (scale === 1 && Math.abs(info.velocity.x) > 500) {
      handleNavigation(info.velocity.x > 0 ? -1 : 1);
    }
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (scale === 1) {
      setScale(2);
      setPosition({ 
        x: -(x - rect.width / 2) * 2, 
        y: -(y - rect.height / 2) * 2 
      });
    } else {
      resetZoom();
    }
  };

  const downloadImage = async (imageUrl: string, title: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const currentItem = fullscreenIndex !== null ? galleryData[fullscreenIndex] : null;

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background via-muted/10 to-background"
      id="gallery"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <Badge variant="outline" className="border-primary/30 text-primary">
                Portfolio Gallery
              </Badge>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Project Gallery
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Click on any project to view in fullscreen • Double-click to zoom • Drag to pan • Ctrl+scroll to zoom
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto"
          >
            {galleryData.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                variants={itemVariants}
                className={cn(
                  "relative cursor-pointer transform transition-transform duration-300",
                  getGridClasses(item.size),
                  "hover:scale-[1.02] active:scale-[0.98]"
                )}
                onClick={() => openFullscreen(index)}
              >
                <Card className="h-full overflow-hidden border border-border/50 bg-card">
                  <div className={`relative ${getAspectRatio(item.size)}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    <Badge
                      className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-border text-sm font-medium"
                    >
                      {item.category}
                    </Badge>

                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-300 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                            {item.tools.length} tools
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Image Viewer */}
      <AnimatePresence>
        {fullscreenIndex !== null && currentItem && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
              onClick={closeFullscreen}
            />

            {/* Fullscreen Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
              <motion.div
                ref={fullscreenRef}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col bg-background rounded-xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={closeFullscreen}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {currentItem.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {fullscreenIndex + 1} of {galleryData.length} • {Math.round(scale * 100)}% • Drag to pan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowZoomControls(!showZoomControls)}
                      className="text-white hover:bg-white/10"
                      title="Zoom Controls"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => downloadImage(currentItem.image, currentItem.title)}
                      className="text-white hover:bg-white/10"
                      title="Download"
                    >
                      <Download className="h-5 w-5" />
                    </Button>
                    <Badge className="bg-primary/20 text-primary border-0">
                      {currentItem.category}
                    </Badge>
                  </div>
                </div>

                {/* Main Image Container with Drag & Zoom */}
                <div 
                  ref={containerRef}
                  className="relative flex-1 flex items-center justify-center bg-black overflow-hidden cursor-grab active:cursor-grabbing"
                >
                  <motion.div
                    key={fullscreenIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    {/* Zoomable and draggable image */}
                    <motion.div
                      ref={imageRef}
                      className="relative select-none"
                      style={{
                        scale,
                        x: position.x,
                        y: position.y,
                      }}
                      drag={scale > 1}
                      dragConstraints={containerRef}
                      dragElastic={0.1}
                      dragMomentum={false}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      onDoubleClick={handleDoubleClick}
                      whileTap={{ cursor: "grabbing" }}
                    >
                      <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="max-w-full max-h-full object-contain"
                        draggable="false"
                      />
                    </motion.div>
                    
                    {/* Navigation Buttons - Only show when not zoomed */}
                    {scale === 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleNavigation(-1)}
                          disabled={isAnimating}
                          className="absolute left-2 md:left-4 bg-black/50 hover:bg-black/70 text-white h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg z-10"
                        >
                          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleNavigation(1)}
                          disabled={isAnimating}
                          className="absolute right-2 md:right-4 bg-black/50 hover:bg-black/70 text-white h-10 w-10 md:h-12 md:w-12 rounded-full shadow-lg z-10"
                        >
                          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                        </Button>
                      </>
                    )}
                  </motion.div>
                </div>

                {/* Zoom Controls Panel */}
                <AnimatePresence>
                  {showZoomControls && (
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                      transition={{ type: "spring", damping: 25 }}
                      className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-lg rounded-xl p-3 shadow-2xl border border-gray-700 z-20"
                    >
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleZoomOut}
                          disabled={scale <= 0.5}
                          className="text-white hover:bg-white/10"
                          title="Zoom Out (Ctrl+-)"
                        >
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                        
                        <div className="w-32">
                          <div className="text-center text-xs text-gray-300 mb-1">
                            Zoom: {Math.round(scale * 100)}%
                          </div>
                          <input
                            type="range"
                            min="50"
                            max="500"
                            value={scale * 100}
                            onChange={(e) => setScale(parseInt(e.target.value) / 100)}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
                          />
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleZoomIn}
                          disabled={scale >= 5}
                          className="text-white hover:bg-white/10"
                          title="Zoom In (Ctrl++)"
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={resetZoom}
                          className="text-white hover:bg-white/10 ml-2"
                          title="Reset Zoom (Ctrl+0)"
                        >
                          <RotateCcw className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Info Panel */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-900 border-t border-gray-800 p-4 md:p-6"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Info className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                        <h4 className="text-base md:text-lg font-semibold text-white">
                          Project Description
                        </h4>
                      </div>
                      <p className="text-sm md:text-base text-gray-300">
                        {currentItem.description}
                      </p>
                    </div>
                    
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          Tools Used
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentItem.tools.map((tool, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-primary/10 text-primary border border-primary/30 text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Navigation Dots */}
                  <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
                    {galleryData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setFullscreenIndex(index)}
                        className={cn(
                          "h-2 w-2 rounded-full transition-all duration-300",
                          index === fullscreenIndex
                            ? "bg-primary w-6"
                            : "bg-gray-600 hover:bg-gray-400"
                        )}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};