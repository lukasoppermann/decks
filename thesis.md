# Thesis 
=========================
# Herleitung & Problemstellung

# Herleitung

# Problemstellung

> Can the complexity of an everyday used files system be reduced and adapted to be used on a touchscreen without compromising the functionality and the user experience?

Computer führt oft zu komplizierten Arbeitsabläufen und schafft Umwege durch Controller wie die Maus.
Der Computer hat viel neues Gebracht, aber viele gute Möglichkeiten der vorherigen Arbeitsweisen verdrängt.
-> zu Beispiel vereinen. 

- Touchscreen Geräte sind momentan sehr beschränkt in Bezug auf die von Ihnen gebotenen Möglichkeiten.

Haben Touchscreens & Gestensteuerung die Möglichkeit beide Arbeitsweisen zu vereinen?

Ziel ist es die Möglichkeiten des Computers mit der intuitiven und direkten Steuerung durch Gesten mithilfe eines Touchscreens zu vereinen, sodass alle Möglichkeiten einfach genutzt werden können und die Barriere der Steuerung verschwindet.
=========================
# Literaturrecherche & Projekte

## Gestures
**What is an intuitive gesture? define!**
An intuitive gestures must resemble the same or similar action in real life (e.g. Turning a page in a book and looking at the same picture) and in the controlled interface. If the action can not be performed in real life (e.g. pinch-to-zoom) it has to be learned and can therefore not be defined as intuitive. (7)

**Characteristics of a rememberable gesture**
Designing real intuitive gestures is nearly impossible, so I will discuss the next approach, tried my most companies manufacturing touch screen devices: *to design rememberable and usable gestures.*
If a gesture is differs enough from all others it is easier to remember than if the gestures are very similar. A gesture should have a uniqueness. The same idea of a gesture (like a swipe) should not be used in more than a couple gestures (e.g. 1 finger swipe, 2-finger swipe, 3-finger swipe) because this makes it harder to remember which action produces a specific result.

Another important factor, why for e.g. Apples gestures are so successful is that gestures have to feel right and be supporter by animations. Closing in application on the iPad can be done by placing 5 fingers spread out on the screen and pulling them together not unlike crumpling a piece of paper. The applications is minimised by scaling down to a size of 0. This supports the idea that you "crumple" the app, making the gesture feel right and helping to remember it, because you just remember to "crumple an app" to close.

Similar gestures should have similar results, so that the user is able to remember in clusters (**cluster reference**). (e.g. 1 finger swipe goes to next picture, 2-finger swipe goes to next gallery). Additionally opposite actions can use the exact opposite of a command like on Apple OS X where swipe up with 4 fingers shows all open windows while the swipe down with 4 fingers shows only the current application in focus.

As presented in the Magical number seven plus or minus two people have a hard time to remember many different items in combination with one specific topic if they do not use advanced memory techniques like chunks. Because one can not expect users to use these techniques, the number of gestures essential for controlling an interface should not venture to far away from this number. The current version of Apple's OS facilitates 9 gesture clusters (7 single gestures and 2 clusters of 2 opposite gestures).


 - Studies of gestures?
- Apple Touch Gestures (as an example for gestures)
- Apple, google & Microsoft Patents for interactions 

**What benefits do gesture controlled interfaces have?**
- In contrast to button controlled Interfaces, some gestures (especially 3D gestures, but any gesture that does not need a specific point of focus (e.g. a swipe over the screen with no specific position)) are less likely to distract and create a complexity-overload (8).

- What kind of 3D gestures are possible?
- What problems arise from gestures in 3D space?
- How do people feel about using 3D gestures?
- Are there benefits of 3D gestures?

- S. Malassiotis, N. Aifanti, and M. Strintzis. A gesture
recognition system using 3D data. In Proceedings of 3D
Data Processing Visualization and Transmission
Symposium, pages 190{193, 2002.

- A. Riener, M. Rossbory, and A. Ferscha. Natural DVI
based on intuitive hand gestures. In Workshop UX in
Cars, Interact 2011, page 5, September 5th 2011.

> *Designing Intuitive Gesture-Based Human Interface Systems*
> Gestures have to be learned which lease to a barrier if to many gestures are required for operation (7)
	→ If gestures use "real life gestures" like "scrolling/	
		flipping" through a book, it is easier to remember.
→ My thought: One gesture has to do the same everywhere 
→ Apart from a few number of key gestures everything else should be accessible via UI (Pie Menues / half Pie Menus)


## Touchscreen
### what advantages do touchscreens have. 
> multi-touch systems are capable of being adapted to almost any imaginable problem as the screen content can be modified to the developer's needs, he can simulate input devices such as keyboards or tasks like technical drawing by creating an adequate virtual reproduction. This makes touch screens a very flexible user interface system and enables extremely intuitiveapplications, if designed correctly. (1)

> Another specific positive aspect of multi-touch lies within the use of simultaneously handled input devices. As users can employ both their hands (and many fingers) or also different devices in combination with their hands at the same time, they are able to make signicant improvements regarding the time a task takes to be completed. Users need to be somewhat acquainted with the handling, but on simple and intuitive systems, this seems to be no problem, as Wu and Balakrishnan found out on assessing their Room Planner application (2).

> one can extract much information out of a single means of input, Finger touches can be varied in pressure sensitivity and angle (on several axes) and hands can be used to express a variety of gestures by tilting, flicking and catching or forming any conceivable kind of sign (2)

> multi-touch opens a whole new set of possibilities for applications since multi-touch implies not only multiple hands or devices but also multiple users. This enables the creation of reasonable collaborative touch systems, in which several users can interact with the screen as well as with each other simultaneously. (1)

### problems of touch screens? solutions?
> On the negative side, multi-touch systems complicate the occlusion problem, as several fingers, hands or devices are clouding even more parts of the touch screen than on singletouch devices. This can, however, be eased by using clever interface design approaches, as Wu and Balakrishnan confirmed (2). Another basic issue is the fat finger problem which requires designers to use interaction elements of a certain minimum size, in order to be precisely touchable by human fingers. (Which can be solved by having an invisible touchable overlay to the visual element, the so called ice berg tips (3))

> The surface of a multi-touch systems must always be in sight to get discernable display information (4). However, this is on some occasions hardly possible, like driving a car or operating a device within a pocket. It also restricts simple touch screens from being a beneficial device for visually impaired users (6). In some fields, a touch screen is mostly exposed to sunlight as with notebooks or mobile phones and visibility can be heavily a affected as well.

> Feedback is not felt, but can only be given by sound or a visual effect on screen. Sound can be muted and a visual effect can be easily overlook, thus resulting in an insecurity of the user about wether or not an action has taken effect. A solution can be a tactile feedback using a touchscreen such as developed by tactus. (5)

> What is more, some actions like scribbling notes or making finer drawings can not be reasonably performed with fingers and on small screens (4). You need a device of a certain size or one that explicitly can handle appropriate input tools such as a stylus additionally to the usual hand and finger recognition. (This can be solved by pens similar to drawing tables as are sold for the iPad *find source*)

> Also, even though touch screens can adapt very closely to a vast number of application purposes, they will only ever be a virtual representation of the original situation and lack certain features such as a plastic shape. This can make a significant difference in the handling of the interface, as can be seen when trying to rapidly handle a virtual keyboard in contrast to the real thing. (1) (This problem is being address by multiple companies like Tactus (5) by creating programmatically transformable touch surfaces)

## Optimizing Workspace
- How does a efficient/intuitive workspace look like?
- what is a productive work environment?

→ go more towards collaboration? And modern ideas of company hirachie? 

=========================
# Die Evolution des Arbeitsplatzes
=========================
# Konzept
- Interaktion & Design
=========================
# Diskussion
- Blinde Nutzer
- Kulturelle & Persönliche Unterschiede (understanding gestures)
=========================
# Fazit & Ausblick

# Literature list
(1) A Short Report on Multi-Touch User Interfaces Patrick Lindemann Department Media Informatics, University of Munich Amalienstrasse 17 Munich, Germany patrick.lindemann@campus.lmu.de

(2) M. Wu and R. Balakrishnan. Multinger and whole hand gestural interaction techniques for multi-user tabletop displays. In UIST '03: Proceedings of the 16th annual ACM symposium on User interface software and technology, pages 193{202, New York, NY, USA, 2003. ACM.

(3) Designing Gestural Interfaces. Saffer, Dan (2008): Designing Gestural Interfaces. O’reilly: Sebastopol.

(4) B. Buxton. Multi-touch systems that I have known and loved. http://billbuxton.com/multitouchOverview.html, 2009.

(5) Taking Touch Screen Interfaces Into A New Dimension - A TACTUS TECHNOLOGY WHITE PAPER. 2012 Tactus Technology, Inc.

(6) Investigating Touchscreen Accessibility for People with Visual Impairments. David McGookin, Stephen Brewster, WeiWei Jiang Department of Computing Science. University of Glasgow
Glasgow, G12 8QQ

(7) Designing Intuitive Gesture-Based Human Interface Systems - Silicon Labs

(8) Natural and Intuitive Hand Gestures: A Substitute for Traditional Vehicle Control? A. Riener and M. Rossbory. Institute for Pervasive Computing, Johannes Kepler University, Linz/Austria

(9) G. A. Miller. The Magical Number Seven, Plus or
Minus Two: Some Limits on Our Capacity for
Processing Information. The Psychological Review, 1956. Online, www.musanim.com/miller1956.