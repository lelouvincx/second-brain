---
Type: Book Chapter
Related:
  - "[[Mastering Blockchain - Fourth Edition]]"
Status: Done
Created At: 2024-05-03T15:31:00
cssclasses:
  - visible-headers
tags:
  - book/chapter
  - blockchain
  - cap-theorem
  - distributed-system
  - bitcoin
  - blockchain/history
  - blockchain/architecture
  - blockchain/functionality
  - blockchain/types
  - byzantine-node
---
Blockchain là công nghệ hứa hẹn sẽ mang đến sự thay đổi mô hình hiện có của hầu hết các doanh nghiệp, từ IT, kinh tế, chính phủ, media cho đến các lĩnh vực y tế, luật pháp bằng cách khiến cho chúng trở nên hiệu quả, tin cậy và minh bạch (transparent).
# The growth of blockchain technology

Với sự ra đời của Bitcoin vào năm 2008, thế giới được tiếp cận với một khái niệm đã cách mạng hóa toàn thể xã hội, và khái niệm đó chính là blockchain.

## Progress towards maturity

The chapter starts by tracing the evolution of blockchain from its early days with Bitcoin to its current state. It highlights the shift from cryptocurrency applications to broader use cases in various industries and the growing interest from both the private and public sectors.

## Rising interest

This section underscores the increasing global interest in blockchain technology, evident in research efforts, academic courses, startup ventures, and the formation of consortiums like the Enterprise Ethereum Alliance (EEA) and Hyperledger.

# Distributed System

- **Distributed System** (hệ thống phân tán): là một mô hình tính toán (computing paradigm) trong đó có từ hai hoặc nhiều **nodes** (máy tính riêng lẻ làm việc trong distributed system)  làm việc cùng nhau một cách đồng bộ và có tổ chức để đạt được một kết quả chung.
- Blockchain có thể được hiểu là một hệ thống có cả hai properties là **decentralized** (phi tập trung) và **distributed**. Hay còn được gọi là **decentralized-distributed system**.
- Blockchain là **message-passing distributed system** (hệ thống phân tán truyền tin), có nghĩa là các nodes giao tiếp với nhau bằng cách gửi tin nhắn.
- **Node** mà thể hiện những hành vi bất thường (**arbitrary behavior**) được gọi là **Node Byzantine**, được đặt tên theo *Byzantine Generals Problem*. Bất cứ hành vi bất thường nào của một **Node** trong Network, cho dù là có cố ý (**malicous**) hay không, đều được phân loại là **Node Byzantine**.<div class="center"><img src="https://i.imgur.com/0JEYcin.png" /></div>Ví dụ minh họa trong một hệ thống gồm 6 Nodes, với Node N4 là **Node Byzantine**, có thể dẫn đến tình trạng data inconsistency (không toàn vẹn dữ liệu), L2 là link chậm hoặc có thể đã bị hư hại, dẫn đến tình trạng partition trong network.
- Hai thách thức của **Distributed System Design** là **coordination** (sự phối hợp) giữa các nodes và **fault-tolerance** (khả năng chịu lỗi - trong blockchain, hệ thống vẫn phải tiếp tục hoạt động được ngay cả khi có một số nodes bị lỗi).

## CAP theorem

- Định lý **CAP**, còn được gọi là định lý **Brewer**, được **Eric Brewer** đưa ra vào năm 1998 dưới dạng giả thuyết. Đến năm 2002, **Seth Gilbert** và **Nancy Lynch** đã chứng minh nó là một định lý.
- Định lý khẳng định rằng bất kỳ hệ thống phân tán nào cũng không thể đồng thời có **consistency**, **availability** và **partition tolerance**:
	- **Consistency** là một thuộc tính đảm bảo rằng tất cả các nodes trong Distributed System đều có một bản sao dữ liệu duy nhất, up-to-date và giống hết nhau.
	- **Availability** tức là các nodes trong System đều hoạt động, accessible và sẵn sàng tiếp nhận incoming requests và trả về data mà không gặp bất cứ lỗi nào khi cần thiết.
	- **Partition tolerance** đảm bảo rằng trong trường hợp một số nodes trong một network không thể giao tiếp với nhau do đường truyền mạng, distributed system vẫn hoạt động một cách bình thường.
- Hình minh họa:<div class="center"><img src="https://i.imgur.com/AkDjtNZ.png" /></div>
- Trường hợp **AC** không thể nào tồn tại, vi **network partitions** (phân vùng mạng) là không thể tránh khỏi, nên chúng ta chỉ có thể chọn lựa giữa **availability** và **consistency** khi vấn đề này xảy ra.
- Trong blockchains, người ta hy sinh **consistency** để đạt được **availability** và **partition tolerance**. Nguyên nhân là vì theo thời gian, các nodes xác thực và đồng bộ dữ liệu dẫn đến việc đạt được **consistency**, khái niệm này được gọi là **eventual consistency**.
## PACELC theorem
- Là phiên bản cải tiến của **CAP theorem**, được đưa ra bởi Daniel J. Abadi đến từ đại học Yales.

# The history of blockchain

## Bitcoin

- Digital currency đã có mặt từ khoảng những năm thập niên 90, tuy nhiên lại phát sinh ra một vấn đề là **double spending**, tức là attacker cố để dùng digital currency 2 lần. Chính vì vậy Bitcoin được ra đời.
- Bitcoin có thể giải quyết được **SMR problem** (discuss in later chapter).
- Bitcoin có thể giải quyết vấn đề trên nhờ vào việc nó cho phép sao chép các blocks tại các **correct nodes** (không phải node Bazeltyne và tuân theo quy tắc của Bitcoin) và đảm bảo tính **consistency** thông qua cơ chế **PoW**. 

## Electronic cash

- Để tạo ra một hệ thống Electronic Cash hiệu quả, cần phải đáp ứng hai yêu cầu: **accountability** và **anonymity**.
	- **Accountability** để đảm bảo rằng cùng một số tiền chỉ được tiêu 1 lần (giải quyết vấn đề **double spending**) và chị được dùng bởi chủ nhân của số tiền đó.
	- **Anonymity** để đảm bảo rằng sự riêng tư của người dùng được bảo mật. Tuy nhiên vì đây là trong thế giới số, để đạt được này rất khó do các cơ chế cá nhân hóa, tracing và logging vốn có trong các hệ thống thanh toán kỹ thuật số, ví dụ như thanh toán bằng thẻ tín dụng.
- Vấn đề **Anonymity** có thể giải quyết được bởi **cryptography**.
- Sau khi Bitcoin ra đời vào 2009, khái niệm **cryptocurrency** cũng ra đời không lâu sau đó. Và cũng nhờ đó, nó giải quyết được vấn đề **distributed consensus** trong một **trustless** (không tin cậy) network. 

# Introducing blockchain

- Các keywords của blockchain:
	- **Peer-to-peer**: không có **central controller** (một ai đó đứng sau điều khiển) trong network, và tất cả các nodes giao tiếp với nhau một cách trực tiếp.
	- **Distributed ledger**: nghĩa của từ ledger nghĩa là *sổ cái*, tức là ghi lại các **transactions** (giao dịch). Blockchain là một **distributed ledger**. Lúc này, hiểu đơn giản là **ledger** sẽ được phân phối cho tất cả các nodes trong network, và mỗi node lưu một bản sao hoàn chỉnh của một **ledger**. 
	- **Cryptographically secure**: ledger vừa đề cập được cryptographically secure, có nghĩa là **crypto** được ứng dụng để bảo mật ledger chống lại **tampering** (giả mạo) và **misuse**.
	- **Append-only**: Data chỉ có thể được thêm vào blockchain theo **time-sequential order** (thứ tự thời gian). Blocks (chứa data) khi đã được thêm vào blockchain không thể bị thay đổi.
	- **Updatable via consensus**: Đây là thuộc tính quan trọng nhất. Bất kỳ cập nhật nào trên blockchain đều phải được **validated** một cách nghiêm ngặt theo **blockchain protocol** và chỉ được thêm vào blockchain sau khi đạt được sự đồng thuận của đa số các nodes trong network.
## Blockchain architecture

### Blockchain by layers

- Có thể xem blockchain là một **layer** của distributed peer-to-peer network chạy trên internet, được tóm gọn trong diagram dưới.<div class="center"><img src="https://i.imgur.com/uLHg8bq.png" /></div>
- Giải thích từng elements:
	- **Network layer**: là internet, cung cấp một layer giao tiếp cơ bản cho blockchain.
	- **P2P Network** chạy bên trên Network layer, bao gồm các **information propagation protocols** (giao thức truyền thông tin), vd: **Gossip protocol**, **Flooding protocol**.
	- **Cryptography layer**: chứa **cryptographic protocol** đảm bảo an toàn cho blockchain.
	- **Consensus layer**: chịu trách nhiệm sử dụng các **consensus mechanism** (cơ chế đồng thuận) khác nhau để đảm bảo sự đồng ý giữa các nodes trong blockchain. Bao gồm các kỹ thuật khác nhau như SMR, proof-based consensus mechanism, Byzantine.
	- **Execution layer**: bao gồm máy ảo, blocks, transactions và **smart contracts**. Layer này chịu trách nhiệm thực thi transfer dữ liệu, thực thi smart contract và tạo ra các block.
	- **Applications layer**: bao gồm smart contracts, decentralized applications, DAOs (tổ chức phi tập trung) và autonomous agent (chương trình có thể tự động thực hiện các nhiệm vụ). Người dùng tương tác với blockchain thông qua các decentralized applications.
### Blockchain in business

- Dưới góc độ doanh nghiệp, blockchain có thể được định nghĩa là một platform nơi người dùng có thể giao dịch với nhau mà không cần đến một bên thứ 3 đáng tin cậy.

## Generic elements of a blockchain

Cấu trúc chung của một blockchain:
<div class="center"><img src="https://i.imgur.com/mPAVpeV.png" /></div>

- **Address**: là **unique identifier** (mã định danh duy nhất) được sử dụng trong blockchain transaction để biểu thị người gửi và người nhận. Address thường là public key hoặc được tạo ra từ public key.
- **Transaction**: đại diện cho việc chuyển giá trị từ một address sang address khác.
- **Block**:  một block chứa thông tin về các transactions và các elements khác. Nó được cấu thành bởi một header và một nhóm các transactions được bundled together (đóng gọi lại với nhau) và sắp xếp một cách hợp lý. Các elements của một block là:
	- Một reference tới block trước đó - hash của header của block trước đó. Một **genesis block** (block khởi đầu) là block đầu tiên bên trong blockchain và được **hardcoded** ngay khi blockchain được khởi tạo
	- **Nonce** là con số được khởi tạo và chỉ dùng một lần. Trong blockchain, nó được sử dụng trong **PoW consensus algorithms** và cho **transaction replay protection**. Một block cũng bao gồm một giá trị **nonce**.
	- **Timestamp** là thời điểm block được khởi tạo.
	- **Merkle root** là hash của tất cả những node có trong **Merkle tree** (một kiểu CTDL). Trong một blockchain block, nó là **combined hash** của tất cả các transactions có trong block. **Merkle root** trong blockchain tồn tại bên trong block header, và cũng là hash của tất cả transactions trong một block. Điều này giúp cho việc chỉ cần **verify** Merkle root thay vì phải verify từng cái transaction.
- **Transactions** là thứ tạo nên một block body. Transaction là một record của một sự kiện, ví dụ như sự kiện chuyển tiền từ người này sang người khác. Kích thước của block phụ thuộc vào loại và thiết kế của blockchain.

Ngoài ra một block còn có một số thuộc tính khác:
- **Peer-to-peer network** là một mạng liên kết (network topology) trong đó các thành viên giao tiếp với nhau trực tiếp bằng cách gửi và nhận tin nhắn.
- **The scripting or programming language** thực hiện các **operations** trên một transaction để thực thi các **functions**. Ví dụ như Bitcoin Script bao gồm một tập hợp các lệnh cho phép các nodes chuyển bitcoin từ một địa chỉ này sang một địa chỉ khác. Script chỉ cho phép các operations cần thiết để thực thi transactions, không cho phép **arbitrary program development**.
- **Virtual Machine** cho phép **Turing-complete** code có thể chạy được trên blockchain (dưới dạng **smart contracts**), trong khi một transaction script chỉ có thể chạy được một số function nhất định.
- **State Machine**: Blockchain có thể được xem như một cơ chế chuyển đổi trạng thái, trong đó một trạng thái thay đổi từ trạng thái ban đầu sang hình thái tiếp theo bởi các nodes trên blockchain network do kết quả của transaction execution.
- **Smart Contracts** chạy trên nền tảng blockchain và bao gồm logic kinh doanh để thực thi khi một số điều kiện nhất định được thỏa mãn. Smart Contract feature không tồn tại trên tất cả các blockchain platforms, nhưng nó đang trở thành một feature nên có nhờ vào tính **flexibility** và **power**.
- **Node** trong mạng blockchain thực thi các functions tùy thuộc vào vai trò nó đảm nhận.
	- Một node có thể đề xuất và thực hiện giao dịch và thực hiện **mining** để tạo ra **consensus** và bảo mật cho blockchain (sử dụng **consensus protocol**, phổ biến nhất là PoW). 
	- Node còn thực hiện **transaction sigining** function. Đầu tiên transactions được tạo ra bởi các nodes, sau đó cũng được ký bởi các nodes sử dụng private keys như bằng chứng rằng họ là người sở hữu hợp pháp của tài sản mà họ muốn giao dịch với ai đó khác trong blockchain network.
## Blockchains functionality

Nodes có thể là những **miners** tạo ra các blocks mới và đào cryptocurrency (coins) hoặc là **block signers** xác thực và ký số các transactions. Tìm ra được node nào sẽ thêm block tiếp theo vào blockchain là một quyết định quan trọng mà tất cả blockchain network cần phải thực hiện được. Có thể đạt được điều này bằng cách sử dụng **consensus mechanism**.

**Consensus** là quá trình đạt được sự đồng thuận giữa các nodes không tin tưởng nhau về trạng thái cuối cùng của data. Việc đạt được sự đồng thuận trở thành một thách thức lớn khi nhiều nodes đang tham gia vào một **distributed system** và họ cần phải đồng ý với nhau về một giá trị duy nhất.

Quá trình đạt được sự đồng thuận trên được gọi là **distributed consensus**, nếu cho phép có lỗi xảy ra, chúng ta gọi là **fault tolerant distributed consensus**.

Quá trình blockchain **validates transactions**, tạo và thêm blocks:
- **Transaction is initiated**: một node bắt đầu một transaction bằng cách tạo ra nó và ký số nó bằng private key. Một transaction có thể xảy ra giữa 2 hoặc nhiều bên.
- **Transaction is validated and broadcast** sử dụng các data-dissemination protocols (giao thức phân tán dữ liệu) như là Gossip protocol đến các nodes xác thực giao dịch dựa trên các tiêu chí hợp lệ được thiết lập trước.
- **Find new block**: khi một transaction được xác thực bởi những **miners** trong blockchain network, nó sẽ được thêm vào trong block, và quá trình mining bắt đầu.
- **New block found**: một khi một **miner** hoàn thành quá trình đào, block được xem là tìm thấy và hoàn tất. Tại thời điểm này, transaction được xem là xác nhận.
- **Add new block to the blockchain**: Block mới tạo được xác thực, transactions hoặc smart contracts bên trong nó được thực thi, và nó được broadcast tới các nodes khác. Các nodes khác cũng xác thực và thực thi nó. Nó trở thành một phần của blockchain, và block tiếp  theo nếu được tìm thấy sẽ link tới block vừa tìm được.
<div class="center"><img src="https://i.imgur.com/ABz3bIw.png" /></div>

## Benefits and features of blockchain

Những lợi ích đáng kể mà công nghệ blockchain mang lại:
- **Simplification of current paradigms**: mô hình hiện tại hoạt động là mỗi thực thể sẽ có một database riêng và việc chia se dữ liệu trở thành một việc khó khăn. Blockchain có thể hoạt động như **single shared ledger**, trong blockchain network, các nodes đều giữ một bản sao của ledger. Điều này giúp đơn giản hóa model hiện tại.
- **Faster dealings**: điều này đặc biệt áp dụng cho thanh toán trước. Blockchain không cần phải đi qua bước kiểm duyệt dài dòng rồi mới thanh toán vì một phiên bản duy nhất của dữ liệu được thống nhất đã có sẵn trên shared ledger giữa các tổ chức tài chính.
- **Cost-saving**: không yêu cầu bên thứ 3 trung gian nên tiết kiệm được chi phí.
- **Smart property**: dễ dàng link tài sản số hoặc vật lý vào blockchain một cách an toàn và chính xác, không ai khác có thể tuyên bố quyền sở hữu nó.
- **Decentralization**: không cần bên thứ 3 để thực hiện transactions, thay vào đó, một cơ chế đồng thuận được sử dụng để thống nhất về tính hợp lệ của giao dịch
- **Transparency and trust**: Ai cũng xem được blockchain nên khiến cho hệ thống này minh bạch.
- **Immutability**: một khi data đã được thêm vào blockchain, nó không dễ dàng để thay đổi.
- **High availability**: hệ thống có được nhờ vào hàng nghìn nodes trong peer-to-peer network, và data được sao chép và cập nhật trên mỗi node, điều này khiến cho mặc dù có vài nodes rời khỏi network, network vẫn hoạt động bình thường.
- **Highly secure**: mọi transactions trên blockchain đều **cryptographically secured** và do đó đảm bảo tính toàn vẹn cho network.
- **Platform for smart contracts**: không phải blockchain nào cũng có thể thực thi *smart contracts*, nhưng nó được xem là một tính năng nên có.   

## Limitations of blockchain technology

- **Scalability**: hiện tại, blockchain network không scalable bằng những mô hình sẵn có hiện tại (ví dụ: financial networks).
- **Regulation**: việc quản lý gần như là không thể trên blockchain, điều này cũng khiến cho blockchain khó được ứng dụng vào những mô hình hiện tại, do người dùng không có một bên thứ ba nào chịu trách nhiệm nếu có điều gì đó xảy ra.
- **Privacy**: tính bảo mật là một hạn chế đối với những public blockchain như Bitcoin, vì nó mang lại tính minh bạch, hay ai cũng có thể xem được các transactions đã được thực hiện. 
- **Relatively immature technology**: công nghệ mới, chưa được phát huy tối đa tiềm năng.
- **Interoperability**: có hai khía cạnh cần xem xét là khả năng tương tác với doanh nghiệp và khả năng tương tác với blockchain khác, nếu thực hiện được điều này thì doanh nghiệp mới mới có thể hưởng lợi đầy đủ từ công nghệ này.
- **Adoption**: blockchain là một công nghệ mới phát triển, một vài khía cạnh (bao gồm những khía cạnh đã liệt kê ở trên) cần được khắc phục trước khi được ứng dụng thêm.

# Types of blockchain

## Distributed ledgers

Distributed ledger là một thuật ngữ rộng dùng để diễn tả **shared databases**. Mặc dù tất cả các blockchains căn bản đều là distributed ledgers, không phải bất kỳ distributed ledgers nào cũng là blockchain.

Điều làm nên sự khác biệt của blockchain và distributed ledger là distributed ledger không cần phải chứa các blocks chứa các giao dịch để mở rộng ledger.

Distributed ledger được phân tán cho những người tham gia, và được sao chép trên các nodes, địa điểm hoặc tổ chức. Distributed ledger có thể private hoặc public.

## Shared ledgers

Thuật ngữ chung để chỉ bất cứ application hoặc database nào được chia sẻ với công chúng hoặc trong một nhóm. Tất cả blockchains đều đọc xem là shared ledger

## Public blockchains

Public blockchains không được sở hữu bởi bất kỳ ai, ai cũng có thể tham gia dưới dạng một node.

## Private blockchains

Loại blockchain này chỉ được sử dụng bởi một nhóm người hoặc tổ chức. Loại blockchains này còn được gọi là **consortium blockchains**, hay **enterprise blockchains**.

## Semi-private blockchains

Với loại blockchain này, một phần của nó là private và một phần của nó là public, nhưng hiện tại nó vẫn còn là một khái niệm.

## Permissioned ledger

Là blockchain mà tất cả thành viên trong network đều đã được biết đến và tin tưởng. Điều này khiến cho không cần sử dụng distributed consensus mechanism, thay vào đó sử dụng agreement protocol để share tình trạng records trên blockchain. Không cần mining mechanism.

## Fully private and proprietary blockchains

Chưa có một ứng dụng phổ biến của loại blockchains này.  

## Tokenized blockchains

Loại blockchains cơ bản tạo ra cryptocurrency, kết quả của quá trình đồng thuận thông qua mining hoặc phân phối ban đầu. Blockchain và Eutherium là một ví dụ.

## Tokenless blockchains

Được thiết kế theo cách mà chúng không có đơn vị cơ bản để transfer value. Tuy nhiên, nó hữu dụng trong trường hợp không cần transfer value giữa các nodes mà chỉ cần chia sẻ thông tin giữa các bên tin tưởng.

Khái niệm này cũng tương tự với **fully private blockchains**, điểm khác biệt ở đây là tokenless blockchains không cần sử dụng token.

## Layer 1 blockchains

Bất cứ layer chain cơ sở nào, chịu trách nhiệm về sự đồng thuận được gọi là layer 1 blockchain.

### Monolithic and polylithic blockchains

**Monolithic chains** khác với **polylithic blockchains** ở chỗ monolithic chains chỉ có một network blockchain thôi (Bitcoin, Eutherium), trong khi đó polylithic blockchains có nhiều chains khác nhau có thể cùng hoặc khác lại và kết nối với một **core chain** và hình thành network of network.

Trong cấu trúc polylithic, có hai loại:
* Nếu các chains kết nối với core chains mà cùng một loại thì được gọi là **homogeneous chains**.
* Nếu các chains kết nối với core chains khác loại và tuân theo các quy tắc khác nhau thì được gọi là **heterogeneous chains**. Thông thường, multichain architectures sẽ xây dựng theo heterogeneous architecture.
## Layer 2 blockchains

Layer 2 blockchains đang dần nổi lên như là giải pháp về scalability và privacy cho layer 1 blockchain. Loại chains này chạy trên nền tảng của layer 1 chains.

### Sidechains

Khái niệm chỉ coins có thể được đưa từ blockchain này sang blockchain khác và quay trở lại. 